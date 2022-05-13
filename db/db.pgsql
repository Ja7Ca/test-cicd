--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

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
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: user_game_biodata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_game_biodata (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    country character varying(255) NOT NULL,
    user_game_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.user_game_biodata OWNER TO postgres;

--
-- Name: user_game_biodata_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_game_biodata_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_game_biodata_id_seq OWNER TO postgres;

--
-- Name: user_game_biodata_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_game_biodata_id_seq OWNED BY public.user_game_biodata.id;


--
-- Name: user_game_histories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_game_histories (
    id integer NOT NULL,
    game character varying(255),
    score integer,
    last_login timestamp with time zone,
    user_game_id integer,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.user_game_histories OWNER TO postgres;

--
-- Name: user_game_histories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_game_histories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_game_histories_id_seq OWNER TO postgres;

--
-- Name: user_game_histories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_game_histories_id_seq OWNED BY public.user_game_histories.id;


--
-- Name: user_games; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_games (
    id integer NOT NULL,
    username character varying(255),
    password character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.user_games OWNER TO postgres;

--
-- Name: user_games_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_games_id_seq OWNER TO postgres;

--
-- Name: user_games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_games_id_seq OWNED BY public.user_games.id;


--
-- Name: user_game_biodata id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_game_biodata ALTER COLUMN id SET DEFAULT nextval('public.user_game_biodata_id_seq'::regclass);


--
-- Name: user_game_histories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_game_histories ALTER COLUMN id SET DEFAULT nextval('public.user_game_histories_id_seq'::regclass);


--
-- Name: user_games id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_games ALTER COLUMN id SET DEFAULT nextval('public.user_games_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20220405035850-create-user-game.js
20220405040020-create-user-game-biodata.js
20220405040147-create-user-game-history.js
\.


--
-- Data for Name: user_game_biodata; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_game_biodata (id, name, country, user_game_id, created_at, updated_at) FROM stdin;
7	name8	country8	11	2022-05-13 12:44:16.978+07	2022-05-13 12:44:16.978+07
15	name11	country11	13	2022-05-13 13:00:41.427+07	2022-05-13 13:00:41.427+07
6	name8	country8	8	2022-04-21 15:02:37.199+07	2022-05-13 14:08:57.84+07
2	name1Update	country1Update	2	2022-04-12 21:22:34.886+07	2022-05-13 14:08:57.992+07
\.


--
-- Data for Name: user_game_histories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_game_histories (id, game, score, last_login, user_game_id, created_at, updated_at) FROM stdin;
2	Pou	90	2022-04-12 21:22:40.371+07	2	2022-04-12 21:22:40.371+07	2022-04-12 21:22:40.371+07
10	basara	70	2022-05-13 13:49:23.551+07	8	2022-05-13 13:49:23.551+07	2022-05-13 13:49:23.551+07
6	ninja saga	85	2022-05-13 14:08:57.888+07	8	2022-04-21 16:00:58.286+07	2022-05-13 14:08:57.889+07
\.


--
-- Data for Name: user_games; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_games (id, username, password, created_at, updated_at) FROM stdin;
10	usernamee	passworde	2022-05-13 00:30:14.807+07	2022-05-13 14:08:57.949+07
2	username1	password1	2022-04-12 21:22:25.915+07	2022-04-20 10:56:46.218+07
8	username2Update	passwrod2Update	2022-04-21 13:55:54.52+07	2022-04-21 14:02:46.796+07
11	username3	password3	2022-05-13 00:34:00.087+07	2022-05-13 00:34:00.087+07
12	username3	password3	2022-05-13 00:38:27.776+07	2022-05-13 00:38:27.776+07
13	username3	password3	2022-05-13 00:46:04.929+07	2022-05-13 00:46:04.929+07
14	username3	password3	2022-05-13 00:47:28.248+07	2022-05-13 00:47:28.248+07
15	username3	password3	2022-05-13 00:47:41.145+07	2022-05-13 00:47:41.145+07
16	usernameBaru	passwordBaru	2022-05-13 01:06:06.983+07	2022-05-13 01:06:06.983+07
\.


--
-- Name: user_game_biodata_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_game_biodata_id_seq', 76, true);


--
-- Name: user_game_histories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_game_histories_id_seq', 12, true);


--
-- Name: user_games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_games_id_seq', 27, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: user_game_biodata user_game_biodata_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_game_biodata
    ADD CONSTRAINT user_game_biodata_pkey PRIMARY KEY (id);


--
-- Name: user_game_histories user_game_histories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_game_histories
    ADD CONSTRAINT user_game_histories_pkey PRIMARY KEY (id);


--
-- Name: user_games user_games_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_games
    ADD CONSTRAINT user_games_pkey PRIMARY KEY (id);


--
-- Name: user_game_biodata user_game_biodata_user_game_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_game_biodata
    ADD CONSTRAINT user_game_biodata_user_game_id_fkey FOREIGN KEY (user_game_id) REFERENCES public.user_games(id) ON DELETE SET NULL;


--
-- Name: user_game_histories user_game_histories_user_game_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_game_histories
    ADD CONSTRAINT user_game_histories_user_game_id_fkey FOREIGN KEY (user_game_id) REFERENCES public.user_games(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

