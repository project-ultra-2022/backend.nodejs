-- database: products_and_trainings

CREATE DATABASE products_and_trainings
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;


CREATE TABLE type_product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL    
);


CREATE TABLE status_courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    status BOOLEAN NOT NULL
);


CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    ente_certificates VARCHAR(25) NOT NULL,
    duration_certification INTEGER NOT NULL,
    duration_product INTEGER NOT NULL,
    status BOOLEAN,
    id_status_course INTEGER NOT NULL,
    FOREIGN KEY (id_status_course) REFERENCES status_courses(id)
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    date_start DATE NOT NULL,
    date_end DATE NOT NULL,
    type_document_teacher INTEGER NOT NULL,
    document_teacher VARCHAR(25) NOT NULL,
    url_site TEXT NOT NULL,
    status BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL,
    id_status_course INTEGER NOT NULL,
    id_product INTEGER NOT NULL,
    FOREIGN KEY (id_status_course) REFERENCES status_courses(id),
    FOREIGN KEY (id_product) REFERENCES products(id)
        
);


CREATE TABLE detail_courses (
    id SERIAL PRIMARY KEY,
    type_document_student VARCHAR(25) NOT NULL,
    document_student VARCHAR(25) NOT NULL,
    agreed_amount FLOAT NOT NULL,
    status BOOLEAN NOT NULL,
    type_document_seller INTEGER NOT NULL,
    document_seller VARCHAR(25) NOT NULL,
    date DATE NOT NULL,
    id_course INTEGER NOT NULL,
    FOREIGN KEY (id_course) REFERENCES courses(id)
    
);

CREATE TABLE lessons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    url_media VARCHAR(100),
    description TEXT,
    date DATE,
    updated_at TIMESTAMP,
    status BOOLEAN,
    id_product INTEGER,
    FOREIGN KEY (id_product) REFERENCES products(id)
);

CREATE TABLE buyers_products (
    id SERIAL PRIMARY KEY,
    date DATE,
    status BOOLEAN,
    id_product INTEGER,
    FOREIGN KEY (id_product) REFERENCES products(id)
);


CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    description TEXT NOT NULL,
    duration INTEGER NOT NULL,
    attempts INTEGER NOT NULL,
    date DATE NOT NULL,
    status BOOLEAN NOT NULL,
    id_product INTEGER NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id)
);

CREATE TABLE questions_quizzes (
    id SERIAL PRIMARY KEY,
    question VARCHAR(50) NOT NULL,
    answer1 VARCHAR(50) NOT NULL,
    answer2 VARCHAR(50) NOT NULL,
    answer3 VARCHAR(50) NOT NULL,
    answer4 VARCHAR(50) NOT NULL,
    correct_answer INTEGER NOT NULL,
    date DATE,
    status BOOLEAN,
    id_quiz INTEGER,
    FOREIGN KEY (id_quiz) REFERENCES quizzes(id)
);

CREATE TABLE report_quizzes (
    id SERIAL PRIMARY KEY,
    type_document INTEGER NOT NULL,
    document VARCHAR(25) NOT NULL,
    date TIMESTAMP NOT NULL,
    score FLOAT NOT NULL,
    id_quiz INTEGER NOT NULL,
    FOREIGN KEY (id_quiz) REFERENCES quizzes(id)
);




-- database: documents

CREATE DATABASE documents
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;


CREATE TABLE type_documentS (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    status BOOLEAN NOT NULL
);

CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    key VARCHAR(50) NOT NULL,
    url VARCHAR(100) NOT NULL,
    type_document INTEGER NOT NULL,
    document VARCHAR(25) NOT NULL,
    status BOOLEAN NOT NULL,
    id_type_document INTEGER NOT NULL,
    FOREIGN KEY (id_type_document) REFERENCES type_documents(id) 
);



-- database: payments

CREATE DATABASE payments
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE TABLE status_payments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL
);

CREATE TABLE trm_currencies (
    id SERIAL PRIMARY KEY,
    origin_currency INTEGER NOT NULL,
    destantion_currency INTEGER NOT NULL
);

CREATE TABLE currencies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    symbol VARCHAR(25) NOT NULL
); 

CREATE TABLE type_payments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);


CREATE TABLE bonds (
    id SERIAL PRIMARY KEY,
    choose_value BOOLEAN NOT NULL,
    number_value FLOAT NOT NULL,
    percentage_value INTEGER NOT NULL,
    start_promotion DATE NOT NULL,
    end_promotion DATE NOT NULL,
    id_currency INTEGER NOT NULL,
    FOREIGN KEY (id_currency) REFERENCES currencies(id)
);


CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    amount FLOAT NOT NULL,
    document VARCHAR(25) NOT NULL,
    date DATE NOT NULL,
    amount_used FLOAT NOT NULL,
    tax FLOAT NOT NULL,
    trm_value FLOAT NOT NULL,
    type_document INTEGER NOT NULL,
    id_type_payment INTEGER NOT NULL,
    id_status_payment INTEGER NOT NULL,
    id_trm_currency INTEGER NOT NULL,
    FOREIGN KEY (id_type_payment) REFERENCES type_payments(id),
    FOREIGN KEY (id_status_payment) REFERENCES status_payments(id),
    FOREIGN KEY (id_trm_currency) REFERENCES trm_currencies(id)
);


CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    reference_code VARCHAR(50) NOT NULL,
    amount FLOAT NOT NULL,
    date DATE NOT NULL,
    id_payment INTEGER NOT NULL,
    FOREIGN KEY (id_payment) REFERENCES payments(id)
);


CREATE TABLE detail_transactions(
    id SERIAL PRIMARY KEY,
    status BOOLEAN NOT NULL,
    date DATE NOT NULL,
    id_transaction INTEGER NOT NULL,
    FOREIGN KEY (id_transaction) REFERENCES transactions(id)
);


-- database: users

CREATE DATABASE users
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;


CREATE TABLE type_documents (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    simbol VARCHAR(25) NOT NULL
);

CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    status BOOLEAN NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    hierarchy INTEGER NOT NULL
);

CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL
);

CREATE TABLE contact_details (
    id SERIAL PRIMARY KEY,
    birth DATE NOT NULL,
    phone VARCHAR(25) NOT NULL,
    indicative_phone VARCHAR(10) NOT NULL,
    address VARCHAR(25) NOT NULL,
    email VARCHAR(30) NOT NULL,
    habeas_data BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    status BOOLEAN NOT NULL,
    id_city INTEGER NOT NULL,
    FOREIGN KEY (id_city) REFERENCES cities(id)
);


CREATE TABLE institutions (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(50) NOT NULL,
    document VARCHAR(25) NOT NULL,
    status BOOLEAN NOT NULL,
    id_type_document INTEGER NOT NULL,
    id_contact_detail INTEGER NOT NULL,
    FOREIGN KEY (id_type_document) REFERENCES type_documents(id),
    FOREIGN KEY (id_contact_detail) REFERENCES contact_details(id)
);


CREATE TABLE people (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    status BOOLEAN NOT NULL,
    document VARCHAR(25) NOT NULL,
    id_type_document INTEGER NOT NULL,
    id_role INTEGER NOT NULL,
    id_enterprise INTEGER NOT NULL,
    id_contact_detail INTEGER NOT NULL,
    FOREIGN KEY (id_type_document) REFERENCES type_documents(id),
    FOREIGN KEY (id_role) REFERENCES roles(id),
    FOREIGN KEY (id_enterprise) REFERENCES institutions(id),
    FOREIGN KEY (id_contact_detail) REFERENCES contact_details(id)
);


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    password VARCHAR(25) NOT NULL,
    expiration_date DATE NOT NULL,
    id_person INTEGER NOT NULL,
    FOREIGN KEY (id_person) REFERENCES people(id)
);


CREATE TABLE users_applications (
    id SERIAL PRIMARY KEY,
    status BOOLEAN NOT NULL,
    id_user INTEGER NOT NULL,
    id_application INTEGER NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_application) REFERENCES applications(id)
);


-- database: turing

CREATE DATABASE turing
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;


CREATE TABLE encrypted_parameters (
    id SERIAL PRIMARY KEY NOT NULL,
    encrypted_value TEXT,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    status BOOLEAN NOT NULL
    
);


CREATE TABLE api_micro_services (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(25) NOT NULL,
    host VARCHAR(25) NOT NULL,
    port VARCHAR(25) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    status BOOLEAN NOT NULL
    
);


CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    key VARCHAR(25) NOT NULL,
    route VARCHAR(25) NOT NULL,
    heavy_request VARCHAR(25) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    id_api_micro_service INTEGER NOT NULL,
    FOREIGN KEY (id_api_micro_service) REFERENCES api_micro_services (id) 
        
);


CREATE TABLE processes (
    id SERIAL PRIMARY KEY NOT NULL,
    type_document INTEGER NOT NULL,
    document VARCHAR(25) NOT NULL,
    status_transaction VARCHAR(25) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    id_service INTEGER NOT NULL,
    FOREIGN KEY (id_service) REFERENCES services (id) 
        
);


CREATE TABLE data_transactions (
    id SERIAL PRIMARY KEY NOT NULL,
    data TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    downloaded BOOLEAN NOT NULL,
    id_process INTEGER NOT NULL,
    FOREIGN KEY (id_process) REFERENCES processes (id) 
       
);


CREATE TABLE static_values (
    id SERIAL PRIMARY KEY NOT NULL,
    id_parent INTEGER,
    key VARCHAR(25) NOT NULL,
    value VARCHAR(25) NOT NULL,
    aux1 VARCHAR(25) NOT NULL,
    aux2 VARCHAR(25) NOT NULL,
    aux3 VARCHAR(25) NOT NULL,
    status BOOLEAN NOT NULL 
    
);
