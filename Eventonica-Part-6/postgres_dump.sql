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
-- Name: events; Type: TABLE; Schema: public; Owner: gabbymoreno
--

CREATE TABLE public.events (
    id integer NOT NULL,
    title text NOT NULL,
    date text NOT NULL,
    category text NOT NULL
);


ALTER TABLE public.events OWNER TO gabbymoreno;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: gabbymoreno
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO gabbymoreno;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gabbymoreno
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: saved_user_events; Type: TABLE; Schema: public; Owner: gabbymoreno
--

CREATE TABLE public.saved_user_events (
    user_id integer,
    event_id integer
);


ALTER TABLE public.saved_user_events OWNER TO gabbymoreno;

--
-- Name: users; Type: TABLE; Schema: public; Owner: gabbymoreno
--

CREATE TABLE public.users (
    username text,
    id integer NOT NULL
);


ALTER TABLE public.users OWNER TO gabbymoreno;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: gabbymoreno
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO gabbymoreno;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gabbymoreno
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: gabbymoreno
--

COPY public.events (id, title, date, category) FROM stdin;
26	Latinx in Tech	March 4, 2020	Technology
27	Montigo Concert	February 24, 2020	Music
28	Corgi Conference	April 1, 2020	Lifestyle
29	Rebecca Sawyer: Live	May 21, 2020	Music
\.


--
-- Data for Name: saved_user_events; Type: TABLE DATA; Schema: public; Owner: gabbymoreno
--

COPY public.saved_user_events (user_id, event_id) FROM stdin;
33	26
33	27
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: gabbymoreno
--

COPY public.users (username, id) FROM stdin;
Sergio	31
gibby	33
michobear	36
\.


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gabbymoreno
--

SELECT pg_catalog.setval('public.events_id_seq', 29, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gabbymoreno
--

SELECT pg_catalog.setval('public.users_id_seq', 36, true);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: saved_user_events savedUserEvents_event_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.saved_user_events
    ADD CONSTRAINT "savedUserEvents_event_id_fkey" FOREIGN KEY (event_id) REFERENCES public.events(id) ON DELETE CASCADE;


--
-- Name: saved_user_events savedUserEvents_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gabbymoreno
--

ALTER TABLE ONLY public.saved_user_events
    ADD CONSTRAINT "savedUserEvents_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

