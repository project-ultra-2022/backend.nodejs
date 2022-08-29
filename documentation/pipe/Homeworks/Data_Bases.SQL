-- users 
CREATE DATABASE users
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE TABLE type_documents
(
    id SERIAL NOT NULL 
    name text  NOT NULL,
    simbol text NOT NULL,
    CONSTRAINT type_documents_pkey PRIMARY KEY (id)
);

CREATE TABLE applications 
(
    id SERIAL NOT NULL
    name text NOT NULL,
    status boolean NOT NULL,
    CONSTRAINT applications PRIMARY KEY (id)
);

CREATE TABLE roles
(
    id SERIAL NOT NULL 
    name text NOT NULL,
    hierarchy integer NOT NULL,
    CONSTRAINT roles_pkey PRIMARY KEY (id)
);

CREATE TABLE cities
(
    id SERIAL NOT NULL,
    name text NOT NULL,
    CONSTRAINT cities_pkey PRIMARY KEY (id)
);

CREATE TABLE contact_details 
(
    id  SERIAL NOT NULL,
    birth date NOT NULL,
    phone text  NOT NULL,
    indicative_phone text NOT NULL,
    id_city integer NOT NULL,
    adress text NOT NULL,
    email text NOT NULL,
    habeas_data boolean NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    status boolean NOT NULL,
    CONSTRAINT contact_details _pkey PRIMARY KEY (id),
    CONSTRAINT id_city FOREIGN KEY (id_city)
        REFERENCES cities (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE institutions
(
    id SERIAL NOT NULL,
    fullname text NOT NULL,
    id_type_document integer NOT NULL,
    document text NOT NULL,
    id_contact_detail integer NOT NULL,
    status boolean NOT NULL,
    CONSTRAINT institutions_pkey PRIMARY KEY (id),
    CONSTRAINT id_type_contact FOREIGN KEY (id_contact_detail)
        REFERENCES contact_details (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT type_documents FOREIGN KEY (id_type_document)
        REFERENCES type_documents (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE people 
(
    id SERIAL NOT NULL,
    name text NOT NULL,
    lastname text NOT NULL,
    status boolean NOT NULL,
    id_type_document integer NOT NULL,
    id_role integer NOT NULL,
    document text NOT NULL,
    id_enterprise integer NOT NULL,
    id_contact_detail integer NOT NULL,
    CONSTRAINT people _pkey PRIMARY KEY (id),
    CONSTRAINT contact_detail FOREIGN KEY (id_contact_detail)
        REFERENCES contact_details  (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT enterprise FOREIGN KEY (id_enterprise)
        REFERENCES institutions (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT role FOREIGN KEY (id_role)
        REFERENCES roles (id ) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT type_document FOREIGN KEY (id_type_document)
        REFERENCES type_documents (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE users
(
    id  SERIAL NOT NULL,
    id_person integer NOT NULL,
    password text NOT NULL,
    expiration_date date NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT person  FOREIGN KEY (id_person)
        REFERENCES people (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE users_aplications
(
    id SERIAL NOT NULL ,
    id_user integer NOT NULL,
    id_application  integer NOT NULL,
    status boolean NOT NULL,
    CONSTRAINT users_aplications_pkey PRIMARY KEY (id_user),
    CONSTRAINT application FOREIGN KEY (id_application)
        REFERENCES applications (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT users FOREIGN KEY (id_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

-- turing

CREATE DATABASE turing
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE TABLE encrypted_parameters
(
    id SERIAL NOT NULL,
    key character varying NOT NULL,
    encrypted_value text,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id)
);

CREATE TABLE api_micro_services
(
    id SERIAL NOT NULL,
    name character varying NOT NULL,
    host character varying NOT NULL,
    port character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id)
);

CREATE TABLE services
(
    id SERIAL NOT NULL,
    id_api_micro_service integer NOT NULL,
    key character varying NOT NULL,
    route character varying NOT NULL,
    heavy_request character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT id_api_micro_service FOREIGN KEY (id_api_micro_service)
        REFERENCES api_micro_services (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE TABLE processes
(
    id SERIAL NOT NULL,
    id_service integer NOT NULL,
    type_document integer,
    document character varying,
    status_transaction character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT id_service FOREIGN KEY (id_service)
        REFERENCES services (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE TABLE data_transactions
(
    id SERIAL NOT NULL,
    id_process integer NOT NULL,
    data text NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    downloaded boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id),
    CONSTRAINT id_process FOREIGN KEY (id_process)
        REFERENCES processes (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE TABLE static_values
(
    id SERIAL NOT NULL,
    id_parent integer,
    key character varying NOT NULL,
    value character varying,
    aux1 character varying,
    aux2 character varying,
    aux3 character varying,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id)
);

--documents

CREATE DATABASE documents
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE TABLE type_documents
(
    id SERIAL NOT NULL,
    name text NOT NULL,
    status boolean NOT NULL,
    CONSTRAINT type_documents_pkey PRIMARY KEY (id)
);

CREATE TABLE documents
(
    id SERIAL NOT NULL,
    key text NOT NULL,
    url text NOT NULL,
    type_document integer NOT NULL,
    document text NOT NULL,
    status boolean NOT NULL,
    id_type_document integer NOT NULL,
    CONSTRAINT documents_pkey PRIMARY KEY (id),
    CONSTRAINT type_document FOREIGN KEY (id_type_document)
        REFERENCES type_documents (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

-- products_and_trainings

CREATE DATABASE products_and_trainings
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;


CREATE TABLE type_product
(
    id SERIAL NOT NULL ,
    name text NOT NULL,
    CONSTRAINT type_product_pkey PRIMARY KEY (id)
);

CREATE TABLE status_courses
(
    id integer NOT NULL,
    name text NOT NULL,
    status boolean NOT NULL,
    CONSTRAINT status_courses_pkey PRIMARY KEY (id)
);

CREATE TABLE prodcuts
(
    id SERIAL NOT NULL,
    name text NOT NULL,
    id_type_product integer NOT NULL,
    entre_certificates text NOT NULL,
    duration_certification integer NOT NULL,
    duration_product integer NOT NULL,
    status boolean NOT NULL,
    id_status_courses integer NOT NULL,
    CONSTRAINT prodcuts_pkey PRIMARY KEY (id),
    CONSTRAINT status_courses FOREIGN KEY (id_status_courses)
        REFERENCES status_courses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE courses
(
    id SERIAL NOT NULL,
    id_product integer NOT NULL,
    date_start date NOT NULL,
    date_end date NOT NULL,
    type_document_teacher integer NOT NULL,
    document_teacher text NOT NULL,
    url_site text  NOT NULL,
    status boolean NOT NULL,
    created_at timestamp without time zone NOT NULL,
    id_status_courses integer NOT NULL,
    CONSTRAINT detail_courses_pkey PRIMARY KEY (id),
    CONSTRAINT prodcut FOREIGN KEY (id_product)
        REFERENCES prodcuts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT status_courses FOREIGN KEY (id_status_courses)
        REFERENCES status_courses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE detail_courses
(
    id SERIAL NOT NULL,
    id_course integer NOT NULL,
    type_document_student integer NOT NULL,
    document_student text NOT NULL,
    agreed_amount FLOAT NOT NULL,
    status boolean NOT NULL,
    type_document_seller integer NOT NULL,
    document_seller text NOT NULL,
    date date NOT NULL,
    CONSTRAINT detail_courses_pkey1 PRIMARY KEY (id),
    CONSTRAINT course FOREIGN KEY (id_course)
        REFERENCES courses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE lessons
(
    id SERIAL NOT NULL,
    id_product integer NOT NULL,
    name text NOT NULL,
    url_media text NOT NULL,
    description text NOT NULL,
    date date NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    status  boolean NOT NULL,
    CONSTRAINT lessons_pkey PRIMARY KEY (id),
    CONSTRAINT products FOREIGN KEY (id_product)
        REFERENCES prodcuts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE buyers_products
(
    id SERIAL NOT NULL,
    id_product integer NOT NULL,
    date date NOT NULL,
    status boolean NOT NULL,
    CONSTRAINT buyers_products_pkey PRIMARY KEY (id),
    CONSTRAINT prodcuts FOREIGN KEY (id_product)
        REFERENCES prodcuts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE quizzes 
(
    id SERIAL NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    duration integer NOT NULL,
    attempts integer NOT NULL,
    date date NOT NULL,
    status boolean NOT NULL,
    id_product integer NOT NULL,
    CONSTRAINT quizzes _pkey PRIMARY KEY (id),
    CONSTRAINT products FOREIGN KEY (id_product)
        REFERENCES prodcuts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE questions_quizzes
(
    id SERIAL NOT NULL,
    id_quiz integer NOT NULL,
    quiestion text NOT NULL,
    answer1 text NOT NULL,
    answer2 text NOT NULL,
    answer3 text NOT NULL,
    answer4 text NOT NULL,
    correct_answer integer NOT NULL,
    date date NOT NULL,
    status boolean NOT NULL,
    CONSTRAINT questions_quizzes_pkey PRIMARY KEY (id_quiz),
    CONSTRAINT quizzes FOREIGN KEY (id_quiz)
        REFERENCES quizzes (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE report_quizzes
(
    id SERIAL NOT NULL,
    type_documents integer NOT NULL,
    document text NOT NULL,
    id_quiz integer NOT NULL,
    date timestamp without time zone NOT NULL,
    score FLOAT NOT NULL,
    CONSTRAINT report_quizzes_pkey PRIMARY KEY (id),
    CONSTRAINT quizzes FOREIGN KEY (id_quiz)
        REFERENCES quizzes (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
