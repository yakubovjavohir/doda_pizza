--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: breakfast; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.breakfast (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    fixed__price numeric,
    vegetarian boolean DEFAULT false,
    dis_available_toppings text[] DEFAULT '{}'::text[],
    "imageUrl" character varying NOT NULL,
    price numeric,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.breakfast OWNER TO postgres;

--
-- Name: breakfast_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.breakfast_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.breakfast_id_seq OWNER TO postgres;

--
-- Name: breakfast_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.breakfast_id_seq OWNED BY public.breakfast.id;


--
-- Name: coffee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coffee (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    fixed__price numeric,
    "imageUrl" character varying NOT NULL,
    price numeric,
    topping jsonb DEFAULT '[]'::jsonb,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.coffee OWNER TO postgres;

--
-- Name: coffee_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.coffee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.coffee_id_seq OWNER TO postgres;

--
-- Name: coffee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.coffee_id_seq OWNED BY public.coffee.id;


--
-- Name: dessert; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dessert (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    fixed__price numeric,
    vegetarian boolean DEFAULT false,
    dis_available_toppings text[] DEFAULT '{}'::text[],
    "imageUrl" character varying NOT NULL,
    price numeric,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.dessert OWNER TO postgres;

--
-- Name: dessert_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.dessert_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.dessert_id_seq OWNER TO postgres;

--
-- Name: dessert_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.dessert_id_seq OWNED BY public.dessert.id;


--
-- Name: drink; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.drink (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    fixed__price numeric,
    vegetarian boolean DEFAULT false,
    gaz boolean DEFAULT false NOT NULL,
    "imageUrl" character varying NOT NULL,
    price numeric,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updateAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.drink OWNER TO postgres;

--
-- Name: drink_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.drink_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.drink_id_seq OWNER TO postgres;

--
-- Name: drink_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.drink_id_seq OWNED BY public.drink.id;


--
-- Name: facts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.facts (
    id integer NOT NULL,
    calories integer NOT NULL,
    protein integer NOT NULL,
    fat integer NOT NULL,
    carbohydrate integer NOT NULL,
    "ttId" integer
);


ALTER TABLE public.facts OWNER TO postgres;

--
-- Name: facts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.facts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.facts_id_seq OWNER TO postgres;

--
-- Name: facts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.facts_id_seq OWNED BY public.facts.id;


--
-- Name: kids_fave; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kids_fave (
    id integer NOT NULL,
    type character varying NOT NULL,
    product integer NOT NULL,
    spicy boolean DEFAULT false NOT NULL,
    "kidsFriendly" boolean DEFAULT true NOT NULL,
    "recommendedAge" integer,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.kids_fave OWNER TO postgres;

--
-- Name: kids_fave_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.kids_fave_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.kids_fave_id_seq OWNER TO postgres;

--
-- Name: kids_fave_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.kids_fave_id_seq OWNED BY public.kids_fave.id;


--
-- Name: milkshakes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.milkshakes (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    fixed__price numeric,
    "imageUrl" character varying NOT NULL,
    price numeric,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.milkshakes OWNER TO postgres;

--
-- Name: milkshakes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.milkshakes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.milkshakes_id_seq OWNER TO postgres;

--
-- Name: milkshakes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.milkshakes_id_seq OWNED BY public.milkshakes.id;


--
-- Name: order; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."order" (
    id integer NOT NULL,
    "user" integer NOT NULL,
    total_price numeric NOT NULL,
    status character varying DEFAULT 'pending'::character varying NOT NULL,
    address character varying NOT NULL,
    items jsonb NOT NULL,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."order" OWNER TO postgres;

--
-- Name: order_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.order_id_seq OWNER TO postgres;

--
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;


--
-- Name: pizza; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pizza (
    id integer NOT NULL,
    name character varying NOT NULL,
    price numeric,
    description character varying NOT NULL,
    fixed__price numeric,
    vegetarian boolean DEFAULT false,
    dis_available_toppings text[] DEFAULT '{}'::text[],
    pepper boolean DEFAULT false,
    "imageUrl" jsonb DEFAULT '[]'::jsonb NOT NULL,
    topping jsonb DEFAULT '[]'::jsonb,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updateAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.pizza OWNER TO postgres;

--
-- Name: pizza_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pizza_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pizza_id_seq OWNER TO postgres;

--
-- Name: pizza_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pizza_id_seq OWNED BY public.pizza.id;


--
-- Name: prices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prices (
    id integer NOT NULL,
    size character varying NOT NULL,
    price integer NOT NULL,
    topping_id integer
);


ALTER TABLE public.prices OWNER TO postgres;

--
-- Name: prices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.prices_id_seq OWNER TO postgres;

--
-- Name: prices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prices_id_seq OWNED BY public.prices.id;


--
-- Name: sauces; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sauces (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying,
    fixed__price numeric,
    "imageUrl" character varying NOT NULL,
    price numeric,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.sauces OWNER TO postgres;

--
-- Name: sauces_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sauces_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sauces_id_seq OWNER TO postgres;

--
-- Name: sauces_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sauces_id_seq OWNED BY public.sauces.id;


--
-- Name: snacks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.snacks (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    fixed__price numeric,
    vegetarian boolean DEFAULT false,
    dis_available_toppings text[] DEFAULT '{}'::text[],
    pepper boolean DEFAULT false,
    "imageUrl" character varying NOT NULL,
    price numeric,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.snacks OWNER TO postgres;

--
-- Name: snacks_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.snacks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.snacks_id_seq OWNER TO postgres;

--
-- Name: snacks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.snacks_id_seq OWNED BY public.snacks.id;


--
-- Name: topping; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.topping (
    id integer NOT NULL,
    name character varying NOT NULL,
    "imageUrl" character varying,
    type character varying NOT NULL,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updateAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.topping OWNER TO postgres;

--
-- Name: topping_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.topping_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.topping_id_seq OWNER TO postgres;

--
-- Name: topping_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.topping_id_seq OWNED BY public.topping.id;


--
-- Name: traditional_and_thin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.traditional_and_thin (
    id integer NOT NULL,
    size character varying NOT NULL,
    sm integer NOT NULL,
    "imageUrl" character varying NOT NULL,
    weight integer NOT NULL,
    price integer NOT NULL,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updateAt" timestamp without time zone DEFAULT now() NOT NULL,
    "ttId" integer
);


ALTER TABLE public.traditional_and_thin OWNER TO postgres;

--
-- Name: traditional_and_thin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.traditional_and_thin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.traditional_and_thin_id_seq OWNER TO postgres;

--
-- Name: traditional_and_thin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.traditional_and_thin_id_seq OWNED BY public.traditional_and_thin.id;


--
-- Name: volume; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.volume (
    id integer NOT NULL,
    size character varying NOT NULL,
    "imageUrl" character varying NOT NULL,
    weight integer NOT NULL,
    price integer NOT NULL,
    type character varying NOT NULL,
    "createAt" timestamp without time zone DEFAULT now() NOT NULL,
    snack_id integer,
    dessert_id integer,
    drink_id integer,
    coffee_id integer,
    sauces_id integer,
    milkshakes_id integer,
    breakfast_id integer
);


ALTER TABLE public.volume OWNER TO postgres;

--
-- Name: volume_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.volume_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.volume_id_seq OWNER TO postgres;

--
-- Name: volume_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.volume_id_seq OWNED BY public.volume.id;


--
-- Name: breakfast id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.breakfast ALTER COLUMN id SET DEFAULT nextval('public.breakfast_id_seq'::regclass);


--
-- Name: coffee id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coffee ALTER COLUMN id SET DEFAULT nextval('public.coffee_id_seq'::regclass);


--
-- Name: dessert id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dessert ALTER COLUMN id SET DEFAULT nextval('public.dessert_id_seq'::regclass);


--
-- Name: drink id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drink ALTER COLUMN id SET DEFAULT nextval('public.drink_id_seq'::regclass);


--
-- Name: facts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facts ALTER COLUMN id SET DEFAULT nextval('public.facts_id_seq'::regclass);


--
-- Name: kids_fave id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kids_fave ALTER COLUMN id SET DEFAULT nextval('public.kids_fave_id_seq'::regclass);


--
-- Name: milkshakes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.milkshakes ALTER COLUMN id SET DEFAULT nextval('public.milkshakes_id_seq'::regclass);


--
-- Name: order id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);


--
-- Name: pizza id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pizza ALTER COLUMN id SET DEFAULT nextval('public.pizza_id_seq'::regclass);


--
-- Name: prices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prices ALTER COLUMN id SET DEFAULT nextval('public.prices_id_seq'::regclass);


--
-- Name: sauces id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sauces ALTER COLUMN id SET DEFAULT nextval('public.sauces_id_seq'::regclass);


--
-- Name: snacks id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snacks ALTER COLUMN id SET DEFAULT nextval('public.snacks_id_seq'::regclass);


--
-- Name: topping id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topping ALTER COLUMN id SET DEFAULT nextval('public.topping_id_seq'::regclass);


--
-- Name: traditional_and_thin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.traditional_and_thin ALTER COLUMN id SET DEFAULT nextval('public.traditional_and_thin_id_seq'::regclass);


--
-- Name: volume id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volume ALTER COLUMN id SET DEFAULT nextval('public.volume_id_seq'::regclass);


--
-- Data for Name: breakfast; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.breakfast (id, name, description, fixed__price, vegetarian, dis_available_toppings, "imageUrl", price, "createAt") FROM stdin;
1	Mushroom Starter	Hot appetizer with champignons, mozzarella and ranch sauce in a thin wheat tortilla	\N	t	{}	a/a/a/a	32000	2025-06-25 17:38:32.223995
\.


--
-- Data for Name: coffee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.coffee (id, name, description, fixed__price, "imageUrl", price, topping, "createAt") FROM stdin;
1	Americano Coffee	A couple of sips of hot Americano, and you'll be ready to conquer this day	\N	a/a/a/a/	12000	[]	2025-06-25 17:36:36.158628
\.


--
-- Data for Name: dessert; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dessert (id, name, description, fixed__price, vegetarian, dis_available_toppings, "imageUrl", price, "createAt") FROM stdin;
1	Pineapple and cinnamon rolls	Hot sweet rolls with juicy pineapples and cinnamon, poured with sundae sauce, 16 pcs	\N	t	{}	a/a/a/a	35000	2025-06-25 17:34:52.907667
\.


--
-- Data for Name: drink; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.drink (id, name, description, fixed__price, vegetarian, gaz, "imageUrl", price, "createAt", "updateAt") FROM stdin;
1	Black tea		0	f	f	a/a/a/a/	7000	2025-06-25 17:35:52.219912	2025-06-25 17:35:52.219912
\.


--
-- Data for Name: facts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.facts (id, calories, protein, fat, carbohydrate, "ttId") FROM stdin;
\.


--
-- Data for Name: kids_fave; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.kids_fave (id, type, product, spicy, "kidsFriendly", "recommendedAge", "createAt") FROM stdin;
\.


--
-- Data for Name: milkshakes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.milkshakes (id, name, description, fixed__price, "imageUrl", price, "createAt") FROM stdin;
\.


--
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."order" (id, "user", total_price, status, address, items, "createAt") FROM stdin;
\.


--
-- Data for Name: pizza; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pizza (id, name, price, description, fixed__price, vegetarian, dis_available_toppings, pepper, "imageUrl", topping, "createAt", "updateAt") FROM stdin;
1	pesto	\N	Pesto sauce, alfredo sauce, chicken , cottage cheese , tomatoes , mozzarella	85000	t	{chicken,cottage,"esto sauce, alfredo sauce, chicken , cottage cheese "}	t	"a/a/a/a/a"	[1]	2025-06-25 17:28:30.949306	2025-06-25 17:28:30.949306
\.


--
-- Data for Name: prices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.prices (id, size, price, topping_id) FROM stdin;
\.


--
-- Data for Name: sauces; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sauces (id, name, description, fixed__price, "imageUrl", price, "createAt") FROM stdin;
1	Соус Томатный порционный		\N	a/a/a/a/	5000	2025-06-25 17:37:20.664865
\.


--
-- Data for Name: snacks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.snacks (id, name, description, fixed__price, vegetarian, dis_available_toppings, pepper, "imageUrl", price, "createAt") FROM stdin;
1	Dodster Curry 	Hot starter with chicken, mozzarella, pineapples, green pepper and curry sauce in a thin wheat tortilla	\N	t	{}	t	a/a/a/a/	32000	2025-06-25 17:29:43.098528
\.


--
-- Data for Name: topping; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.topping (id, name, "imageUrl", type, "createAt", "updateAt") FROM stdin;
1	Mozzaarella chesse		pizza	2025-06-25 17:26:01.990799	2025-06-25 17:26:01.990799
\.


--
-- Data for Name: traditional_and_thin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.traditional_and_thin (id, size, sm, "imageUrl", weight, price, "createAt", "updateAt", "ttId") FROM stdin;
1	traditional	25	a/a/a/a/	420	65000	2025-06-25 17:30:52.251619	2025-06-25 17:30:52.251619	1
2	traditional	30	a/a/a/a/	620	85000	2025-06-25 17:31:18.151054	2025-06-25 17:31:18.151054	1
3	traditional	35	a/a/a/a/	870	110000	2025-06-25 17:31:36.538638	2025-06-25 17:31:36.538638	1
4	thin	35	a/a/a/a/	770	110000	2025-06-25 17:31:49.518037	2025-06-25 17:31:49.518037	1
5	thin	30	a/a/a/a/	540	85000	2025-06-25 17:32:05.400513	2025-06-25 17:32:05.400513	1
\.


--
-- Data for Name: volume; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.volume (id, size, "imageUrl", weight, price, type, "createAt", snack_id, dessert_id, drink_id, coffee_id, sauces_id, milkshakes_id, breakfast_id) FROM stdin;
1	1 pc	a/a/a/a/	180	32000	snacks	2025-06-25 17:33:46.659256	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Name: breakfast_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.breakfast_id_seq', 1, true);


--
-- Name: coffee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.coffee_id_seq', 1, true);


--
-- Name: dessert_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dessert_id_seq', 1, true);


--
-- Name: drink_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.drink_id_seq', 1, true);


--
-- Name: facts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.facts_id_seq', 1, false);


--
-- Name: kids_fave_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.kids_fave_id_seq', 1, false);


--
-- Name: milkshakes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.milkshakes_id_seq', 1, false);


--
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_id_seq', 1, false);


--
-- Name: pizza_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pizza_id_seq', 1, true);


--
-- Name: prices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.prices_id_seq', 1, false);


--
-- Name: sauces_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sauces_id_seq', 1, true);


--
-- Name: snacks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.snacks_id_seq', 1, true);


--
-- Name: topping_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.topping_id_seq', 1, true);


--
-- Name: traditional_and_thin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.traditional_and_thin_id_seq', 5, true);


--
-- Name: volume_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.volume_id_seq', 1, true);


--
-- Name: topping PK_00dfdd569594e8162447ec4b629; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.topping
    ADD CONSTRAINT "PK_00dfdd569594e8162447ec4b629" PRIMARY KEY (id);


--
-- Name: breakfast PK_0256f5a5f58a89c4be72e5ea339; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.breakfast
    ADD CONSTRAINT "PK_0256f5a5f58a89c4be72e5ea339" PRIMARY KEY (id);


--
-- Name: dessert PK_097345a66c6aa178f19c4076d57; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.dessert
    ADD CONSTRAINT "PK_097345a66c6aa178f19c4076d57" PRIMARY KEY (id);


--
-- Name: order PK_1031171c13130102495201e3e20; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY (id);


--
-- Name: prices PK_2e40b9e4e631a53cd514d82ccd2; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prices
    ADD CONSTRAINT "PK_2e40b9e4e631a53cd514d82ccd2" PRIMARY KEY (id);


--
-- Name: coffee PK_4d27239ee0b99a491ad806aec46; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coffee
    ADD CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY (id);


--
-- Name: volume PK_666025cd0c36727216bb7f2a680; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volume
    ADD CONSTRAINT "PK_666025cd0c36727216bb7f2a680" PRIMARY KEY (id);


--
-- Name: sauces PK_782d0a478f4cbea6fbc52d01032; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sauces
    ADD CONSTRAINT "PK_782d0a478f4cbea6fbc52d01032" PRIMARY KEY (id);


--
-- Name: snacks PK_7ae77e4dcf87277e4dd0c717c04; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.snacks
    ADD CONSTRAINT "PK_7ae77e4dcf87277e4dd0c717c04" PRIMARY KEY (id);


--
-- Name: kids_fave PK_93a2aaecd650126854a712d3b25; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kids_fave
    ADD CONSTRAINT "PK_93a2aaecd650126854a712d3b25" PRIMARY KEY (id);


--
-- Name: milkshakes PK_94930575207276ca98449508391; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.milkshakes
    ADD CONSTRAINT "PK_94930575207276ca98449508391" PRIMARY KEY (id);


--
-- Name: facts PK_b35218a44dc3d5dd2f0f54d7e3f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facts
    ADD CONSTRAINT "PK_b35218a44dc3d5dd2f0f54d7e3f" PRIMARY KEY (id);


--
-- Name: pizza PK_cb1970bd1d17619fd6bc1ec7414; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pizza
    ADD CONSTRAINT "PK_cb1970bd1d17619fd6bc1ec7414" PRIMARY KEY (id);


--
-- Name: traditional_and_thin PK_cb4d61fc74a7e73c1d14052b483; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.traditional_and_thin
    ADD CONSTRAINT "PK_cb4d61fc74a7e73c1d14052b483" PRIMARY KEY (id);


--
-- Name: drink PK_d2bcca4059e927221cce0f95756; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drink
    ADD CONSTRAINT "PK_d2bcca4059e927221cce0f95756" PRIMARY KEY (id);


--
-- Name: volume FK_08a1e3190bd8a2057241bed8ddd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volume
    ADD CONSTRAINT "FK_08a1e3190bd8a2057241bed8ddd" FOREIGN KEY (drink_id) REFERENCES public.drink(id) ON DELETE CASCADE;


--
-- Name: volume FK_4e2a3edb5ab3296d7d918908bee; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volume
    ADD CONSTRAINT "FK_4e2a3edb5ab3296d7d918908bee" FOREIGN KEY (snack_id) REFERENCES public.snacks(id) ON DELETE CASCADE;


--
-- Name: volume FK_5ab7da49ae7c18715e4d7d1871f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volume
    ADD CONSTRAINT "FK_5ab7da49ae7c18715e4d7d1871f" FOREIGN KEY (sauces_id) REFERENCES public.sauces(id) ON DELETE CASCADE;


--
-- Name: facts FK_5ffa4df044d71af665457ff59a5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facts
    ADD CONSTRAINT "FK_5ffa4df044d71af665457ff59a5" FOREIGN KEY ("ttId") REFERENCES public.traditional_and_thin(id) ON DELETE CASCADE;


--
-- Name: volume FK_63300e3725c28e8a9e7d5a7b6bb; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volume
    ADD CONSTRAINT "FK_63300e3725c28e8a9e7d5a7b6bb" FOREIGN KEY (milkshakes_id) REFERENCES public.milkshakes(id) ON DELETE CASCADE;


--
-- Name: prices FK_840bb3e7899a21ddb60f7eee86a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prices
    ADD CONSTRAINT "FK_840bb3e7899a21ddb60f7eee86a" FOREIGN KEY (topping_id) REFERENCES public.topping(id) ON DELETE CASCADE;


--
-- Name: volume FK_d8ba7ecc5cb106a5ab3b779c5a7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volume
    ADD CONSTRAINT "FK_d8ba7ecc5cb106a5ab3b779c5a7" FOREIGN KEY (coffee_id) REFERENCES public.coffee(id) ON DELETE CASCADE;


--
-- Name: traditional_and_thin FK_e09eafa68ed5011b5c945551020; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.traditional_and_thin
    ADD CONSTRAINT "FK_e09eafa68ed5011b5c945551020" FOREIGN KEY ("ttId") REFERENCES public.pizza(id) ON DELETE CASCADE;


--
-- Name: volume FK_e402b1e6d7447c4e164ed6dd316; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volume
    ADD CONSTRAINT "FK_e402b1e6d7447c4e164ed6dd316" FOREIGN KEY (breakfast_id) REFERENCES public.breakfast(id) ON DELETE CASCADE;


--
-- Name: volume FK_f4ac778e02a06a3848033270e83; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.volume
    ADD CONSTRAINT "FK_f4ac778e02a06a3848033270e83" FOREIGN KEY (dessert_id) REFERENCES public.dessert(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

