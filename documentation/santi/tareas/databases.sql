--payments

CREATE DATABASE payments
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Colombia.1252'
    LC_CTYPE = 'Spanish_Colombia.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE currencies(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    symbol VARCHAR(25) NOT NULL
);


CREATE TABLE type_payments(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL
);

CREATE TABLE trm_currencies(
    id SERIAL PRIMARY KEY,
    origin_currency INTEGER NOT NULL,
    destination_currency INTEGER NOT NULL
);


CREATE TABLE status_payments(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL
);

CREATE TABLE bonds (
    id SERIAL PRIMARY KEY,
    choose_value BOOLEAN NOT NULL,
    number_value FLOAT NOT NULL,
    percentage_value INTEGER NOT NULL,
    start_promotion DATE NOT NULL,
    end_promtion DATE NOT NULL,
    id_currencies INTEGER NOT NULL,
    FOREIGN KEY (id_currencies) REFERENCES currencies(id)
);


CREATE TABLE payments(
    id SERIAL PRIMARY KEY,
    id_type_payment INTEGER NOT NULL,
    id_status_payments INTEGER NOT NULL,
    amount FLOAT NOT NULL,
    document VARCHAR(50) NOT NULL,
    date TIMESTAMP NOT NULL,
    amount_used FLOAT NOT NULL,
    id_trm_currency INTEGER NOT NULL,
    tax FLOAT NOT NULL,
    trm_value FLOAT NOT NULL,
    type_document INTEGER NOT NULL,
    FOREIGN KEY(id_type_payment) REFERENCES type_payments(id),
    FOREIGN KEY(id_status_payments) REFERENCES status_payments(id),
    FOREIGN KEY(id_trm_currency) REFERENCES trm_currencies(id)
);


CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    reference_code VARCHAR(25) NOT NULL,
    amount FLOAT NOT NULL,
    date TIMESTAMP NOT NULL,
    id_payment INTEGER NOT NULL,
    FOREIGN KEY(id_payment) REFERENCES payments(id)
);


CREATE TABLE detail_transactions(
    id SERIAL PRIMARY KEY,
    id_transaction INTEGER NOT NULL,
    status BOOLEAN NOT NULL,
    date TIMESTAMP NOT NULL,
    FOREIGN KEY(id_transaction) REFERENCES transactions(id)
);