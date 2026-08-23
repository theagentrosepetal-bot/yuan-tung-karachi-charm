CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read their own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE OR REPLACE FUNCTION public.grant_first_user_admin()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
  ELSE
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER on_auth_user_created_grant_role
AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.grant_first_user_admin();

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TABLE public.menu_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  note text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.menu_categories TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.menu_categories TO authenticated;
GRANT ALL ON public.menu_categories TO service_role;
ALTER TABLE public.menu_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Menu categories are public" ON public.menu_categories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage menu categories" ON public.menu_categories FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER menu_categories_updated_at BEFORE UPDATE ON public.menu_categories FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES public.menu_categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  price text,
  popular boolean NOT NULL DEFAULT false,
  available boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX menu_items_category_idx ON public.menu_items (category_id, sort_order);
GRANT SELECT ON public.menu_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.menu_items TO authenticated;
GRANT ALL ON public.menu_items TO service_role;
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Menu items are public" ON public.menu_items FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins manage menu items" ON public.menu_items FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER menu_items_updated_at BEFORE UPDATE ON public.menu_items FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.menu_categories (slug,title,note,sort_order) VALUES ('soups','Soups & Hotpot','The kitchen is best known for its soups and steamboat hotpot.',1),('starters','Starters & Appetizers',NULL,2),('specialities','Yuan Tung''s Specialities',NULL,3),('chicken','Chicken',NULL,4),('beef','Beef',NULL,5),('fish','Fish',NULL,6),('prawns','Prawns & Seafood',NULL,7),('noodles','Noodles & Chow Mein',NULL,8),('rice','Rice',NULL,9),('eggs','Eggs (Omelets)',NULL,10),('vegetables','Vegetables & Tofu','Vegetarian selections — please confirm current availability by phone.',11),('sizzlers','Sizzlers',NULL,12),('desserts','Desserts',NULL,13),('drinks','Drinks',NULL,14);

INSERT INTO public.menu_items (category_id,name,popular,sort_order) SELECT c.id,v.name,v.pop,v.ord FROM (VALUES ('soups','Yuan Tung Special Hot & Sour Soup',true,1),('soups','Thai Soup',true,2),('soups','Hot Pot (Steamboat Soup)',true,3),('soups','Chicken Corn Soup',false,4),('soups','Wonton Soup',false,5),('soups','Chicken Vegetable Soup',false,6),('soups','Chicken Asparagus Soup',false,7),('soups','Crab Asparagus Soup',false,8),('soups','Egg Tomato Soup',false,9),('soups','Fish Vegetable Soup',false,10),('soups','Beef Pickle Vegetable Soup',false,11),('soups','Garlic Chilli / Lemon Sauce Soup',false,12),('soups','Chicken Vegetable Tou-Fu Soup',false,13),('starters','Fried Prawn Balls',true,1),('starters','Sau Mai (Steamed Dumplings)',true,2),('starters','Steam Fried Gyoza (Dumplings)',false,3),('starters','Prawn on Toast',false,4),('starters','Fish on Toast',false,5),('starters','Fried Spring Rolls',false,6),('starters','Special Prawn Roll in Bread Crumbs',false,7),('starters','Prawn & Vegetables in Egg Roll',false,8),('starters','Fried Stuffed Chillies',false,9),('starters','Stuffed Bean Curd (Tou-fu)',false,10),('starters','Fish / Prawn Cracker',false,11),('specialities','Yuan Tung Fish Whole Spicy',false,1),('specialities','Yuan Tung Szechuan Fish',false,2),('specialities','Yuan Tung Hot & Spicy Prawn',false,3),('specialities','Yuan Tung Hot & Spicy Chicken',false,4),('specialities','Yuan Tung Spicy Won Ton',false,5),('specialities','Yuan Tung Egg Foo-yoong',false,6),('specialities','Yuan Tung Sweet & Sour Prawn',false,7),('specialities','Mongolian Beef',false,8),('specialities','Crispy Beef',false,9),('specialities','Chicken with Black Bean Sauce',false,10),('specialities','Prawn with Garlic Sauce',false,11),('specialities','Prawn with Garlic & Chillies Dry',false,12),('specialities','Chicken with Cauliflower Spicy',false,13),('specialities','Green Beans with Pickle & Mince Meat',false,14),('chicken','Chicken Manchurian',true,1),('chicken','Chicken Chilli Dry',true,2),('chicken','Chicken Chillies with Gravy',false,3),('chicken','Chicken Chillies with Vegetables',false,4),('chicken','Chicken with Lime',false,5),('chicken','Fried Chicken Drumstick',false,6),('chicken','Kung Pao Chicken (Spicy)',false,7),('chicken','Fried Chicken with Chinese Gravy',false,8),('chicken','Chicken Vegetable Egg Roll',false,9),('chicken','Chicken with Pineapple',false,10),('chicken','Sweet & Sour Chicken',false,11),('chicken','Chicken with Soya Sauce',false,12),('chicken','Chicken with Almonds & Vegetables',false,13),('chicken','Chicken with Walnut & Vegetables',false,14),('chicken','Chicken Mahroom Mint Stick & Vegetables',false,15),('chicken','Chicken with Bean Sprout',false,16),('chicken','Chicken with Tou-fu & Vegetables',false,17),('chicken','Chicken with Lily Flower',false,18),('beef','Beef with Chinese Pickle',false,1),('beef','Fried Beef with Chillies',false,2),('beef','Beef Chillies with Vegetables',false,3),('beef','Beef with Vegetables',false,4),('beef','Sweet & Sour Beef',false,5),('beef','Beef with Beansprout',false,6),('beef','Hot Sauce Beef with Vegetables',false,7),('beef','Beef Tomato with Vegetables',false,8),('beef','Beef with Bean Curd (Ma-Bo-Tou-Fu)',false,9),('beef','Sizzling Beef',false,10),('fish','Szechuan Fish',true,1),('fish','Sticky Fish',true,2),('fish','Fish with Chillies & Vegetables',false,3),('fish','Fish with Vegetables',false,4),('fish','Fried Fish with Chinese Sauce Spicy',false,5),('fish','Fish & Chips',false,6),('fish','Steam Fish Fillet Roll in Ginger & Silk Bean',false,7),('fish','Sweet & Sour Fish',false,8),('fish','French Fries',false,9),('prawns','BBQ Squid',true,1),('prawns','Sizzling Prawn',false,2),('prawns','Prawn with Bean Curd (Tou-fu)',false,3),('prawns','Hot Sauce Prawn with Vegetables',false,4),('prawns','Prawn with Chillies & Vegetables',false,5),('prawns','Prawn with Vegetables',false,6),('prawns','Sweet & Sour Prawn',false,7),('prawns','Prawn with Bean Sprout',false,8),('prawns','Prawn with Almond & Vegetables',false,9),('prawns','Prawn with Walnut & Vegetables',false,10),('prawns','Jumbo Prawn in Shell with Sauce',false,11),('prawns','Butterfly Fried Prawn with Tail',false,12),('prawns','Crab with Garlic & Ginger',false,13),('prawns','Fried Squid',false,14),('prawns','Young Corn with Prawn & Vegetables',false,15),('noodles','Chicken Chow Mein',true,1),('noodles','Prawn Chow Mein',false,2),('noodles','Chicken & Prawn Chow Mein',false,3),('noodles','Beef Chow Mein',false,4),('noodles','Crab Chow Mein',false,5),('noodles','Crispy Chow Mein',false,6),('noodles','Chopsuey Chow Mein',false,7),('noodles','Beef Tomato Chow Mein',false,8),('noodles','Vegetables Chow Mein',false,9),('noodles','Thai Chow Mein',false,10),('noodles','Chicken Noodle Soup',false,11),('noodles','Prawn Noodle Soup',false,12),('noodles','Chopsuey Noodle Soup',false,13),('noodles','Won Ton Noodle Soup',false,14),('noodles','Rice Noodles with Chicken & Vegetables',false,15),('noodles','Chinese Chopsuey with Crispy Noodles',false,16),('rice','Egg Fried Rice',true,1),('rice','Chicken Fried Rice',false,2),('rice','Prawn Fried Rice',false,3),('rice','Crab Fried Rice',false,4),('rice','Chicken & Prawn Fried Rice',false,5),('rice','Chicken Masala Fried Rice',false,6),('rice','Vegetable Fried Rice',false,7),('rice','Garlic Fried Rice',false,8),('rice','Beef Chilli Fried Rice',false,9),('rice','Plain Steam Rice',false,10),('rice','Steam Rice with Chicken & Mushroom',false,11),('rice','Steam Rice with Beef Tomato',false,12),('rice','Soft Rice Porridge with Chicken',false,13),('eggs','Egg Foo Yoong',false,1),('eggs','Chicken Foo Yoong',false,2),('eggs','Prawn Foo Yoong',false,3),('eggs','Crab Foo Yoong',false,4),('eggs','Chicken Shrimp Mushroom Foo Yoong',false,5),('eggs','Sharksfin with Whipped Eggs',false,6),('vegetables','Vegetable Chopsuey with Crispy Noodles',false,1),('vegetables','Vegetables Chow Mein',false,2),('vegetables','Vegetable Fried Rice',false,3),('vegetables','Chicken-free Bean Curd (Tou-fu) with Vegetables',false,4),('vegetables','Green Beans with Pickle',false,5),('vegetables','Bean Sprout with Vegetables',false,6),('sizzlers','Sizzling Beef',false,1),('sizzlers','Sizzling Prawn',false,2),('sizzlers','Sizzling Chicken',false,3),('sizzlers','Munchurian Prawn',false,4),('sizzlers','Manchurian Chicken',false,5),('desserts','Chilled Pineapple in Syrup',false,1),('desserts','Ice Cream / Kulfi',false,2),('desserts','Ras Malai',false,3),('drinks','Canned Drinks',false,1),('drinks','Bottled Soft Drinks',false,2),('drinks','Fresh Orange Juice (seasonal)',false,3),('drinks','Fresh Lime Soft Drinks',false,4),('drinks','Cold Tea with Lemon',false,5),('drinks','Chinese Green Tea (per person)',false,6),('drinks','Tea / Coffee — Black or with Milk',false,7),('drinks','Bottled Water 1.5 Ltr',false,8),('drinks','Bottled Water 500 ml',false,9)) AS v(slug,name,pop,ord) JOIN public.menu_categories c ON c.slug=v.slug;