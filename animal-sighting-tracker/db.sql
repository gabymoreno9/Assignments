--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

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
-- Name: individuals; Type: TABLE; Schema: public; Owner: gabbymoreno
--

CREATE TABLE public.individuals (
    id integer NOT NULL,
    nickname text NOT NULL,
    species integer NOT NULL,
    created_date date DEFAULT now() NOT NULL
);


ALTER TABLE public.individuals OWNER TO gabbymoreno;

--
-- Name: individuals_id_seq; Type: SEQUENCE; Schema: public; Owner: gabbymoreno
--

CREATE SEQUENCE public.individuals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.individuals_id_seq OWNER TO gabbymoreno;

--
-- Name: individuals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gabbymoreno
--

ALTER SEQUENCE public.individuals_id_seq OWNED BY public.individuals.id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: gabbymoreno
--

CREATE TABLE public.sightings (
    id integer NOT NULL,
    individual_seen integer,
    sighting_location text NOT NULL,
    appeared_healthy text NOT NULL,
    contact text NOT NULL,
    created_date date DEFAULT now() NOT NULL
);


ALTER TABLE public.sightings OWNER TO gabbymoreno;

--
-- Name: sightings_id_seq; Type: SEQUENCE; Schema: public; Owner: gabbymoreno
--

CREATE SEQUENCE public.sightings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_id_seq OWNER TO gabbymoreno;

--
-- Name: sightings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gabbymoreno
--

ALTER SEQUENCE public.sightings_id_seq OWNED BY public.sightings.id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: gabbymoreno
--

CREATE TABLE public.species (
    id integer NOT NULL,
    name text NOT NULL,
    scientific_name text NOT NULL,
    estimated_living integer,
    status_code text NOT NULL,
    created_date date DEFAULT now() NOT NULL
);


ALTER TABLE public.species OWNER TO gabbymoreno;

--
-- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: gabbymoreno
--

CREATE SEQUENCE public.species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_id_seq OWNER TO gabbymoreno;

--
-- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gabbymoreno
--

ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;


--
-- Name: individuals id; Type: DEFAULT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.individuals ALTER COLUMN id SET DEFAULT nextval('public.individuals_id_seq'::regclass);


--
-- Name: sightings id; Type: DEFAULT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.sightings ALTER COLUMN id SET DEFAULT nextval('public.sightings_id_seq'::regclass);


--
-- Name: species id; Type: DEFAULT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.species ALTER COLUMN id SET DEFAULT nextval('public.species_id_seq'::regclass);


--
-- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: gabbymoreno
--

COPY public.individuals (id, nickname, species, created_date) FROM stdin;
1	baloo	5	2020-03-11
2	daniel	3	2020-03-11
3	arnold	4	2020-03-11
4	tiggor	3	2020-03-11
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: gabbymoreno
--

COPY public.sightings (id, individual_seen, sighting_location, appeared_healthy, contact, created_date) FROM stdin;
3	1	in a tree	yes	joey@gmail.com	2020-03-11
2	3	South of the Market river bed	yes, i think so	mimi@gmail.com	2020-03-11
1	2	West of the Nile River	he's going through a divorce so idk	gibby@gmail.com	2020-03-11
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: gabbymoreno
--

COPY public.species (id, name, scientific_name, estimated_living, status_code, created_date) FROM stdin;
3	tiger	tigerus magnificus	420	TGR	2020-03-11
4	armadillo	arm dildo	69	ARM	2020-03-11
5	orangutan	pongo pygmaeus	47000	ORG	2020-03-11
\.


--
-- Name: individuals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gabbymoreno
--

SELECT pg_catalog.setval('public.individuals_id_seq', 4, true);


--
-- Name: sightings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gabbymoreno
--

SELECT pg_catalog.setval('public.sightings_id_seq', 3, true);


--
-- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gabbymoreno
--

SELECT pg_catalog.setval('public.species_id_seq', 5, true);


--
-- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_pkey PRIMARY KEY (id);


--
-- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (id);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (id);


--
-- Name: individuals individuals_species_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_species_fkey FOREIGN KEY (species) REFERENCES public.species(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: sightings sightings_individual_seen_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_individual_seen_fkey FOREIGN KEY (individual_seen) REFERENCES public.individuals(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

