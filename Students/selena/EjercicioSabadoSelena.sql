/*# Tabla 1 encripted_parameters*/
CREATE TABLE encripted_parameters
(
    id serial NOT NULL,
    key character varying,
    encripted_value text,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id)
);
/*# Tabla 2 */
CREATE TABLE api_micro_services
(
    id serial NOT NULL,
    name character varying,
    host character varying,
    port character varying,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id)
);
/* Tabla 3*/
CREATE TABLE services
(
    id serial NOT NULL,
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
/* Tabla 4*/
CREATE TABLE processes
(
    id serial NOT NULL,
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
/*tabla 5*/
CREATE TABLE data_transactions
(
    id serial NOT NULL,
    id_process integer NOT NULL,
    data text NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    downladed boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id),
    CONSTRAINT id_process FOREIGN KEY (id_process)
        REFERENCES processes (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);
/*tabla 6*/
CREATE TABLE static_values
(
    id serial NOT NULL,
    id_parent integer NOT NULL,
    key character varying,
    value character varying NOT NULL,
    aux1 character varying,
    aux2 character varying,
    aux3 character varying,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id)
);

/*
    Retroalimentación:
    1. Falto agregar el script para crear la base de datos
    2. La tabla se debe llamar: "encrypted_parameters" no "encripted_parameters", aplica lo mismo para el campo "encrypted_value"
    3. Los campos "key", "created_at" y "updated_at"  de la tabla "encrypted_parameters", no tenía atributo NOT NULL
    4. La tabla "api_micro_services" no tenía campos obligatorios, pero segun la integridad de la información que guarda, si era importante
    5. El campo "downloaded" de la tabla "data_transactions" estaba mal escrito
    6. En la tabla "static_values" no esta correctamente relacionado que valores son obligatorios y cuales no
    7. Ninguna tabla tiene comentarios de que hace la tabla

    Nota: 7/10
*/

/* Final scripts : Corregidos */

CREATE DATABASE turing
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE TABLE encrypted_parameters
(
    id serial NOT NULL,
    key character varying NOT NULL,
    encrypted_value text,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id)
);
COMMENT ON TABLE encrypted_parameters IS 'Parámetros encriptados';

CREATE TABLE api_micro_services
(
    id serial NOT NULL,
    name character varying NOT NULL,
    host character varying NOT NULL,
    port character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id)
);
COMMENT ON TABLE api_micro_services IS 'Micro-servicios que consumirá Turing';

CREATE TABLE services
(
    id serial NOT NULL,
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
COMMENT ON TABLE services IS 'Funcionalidades de los micro-servicios';

CREATE TABLE processes
(
    id serial NOT NULL,
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
COMMENT ON TABLE processes IS 'Procesos de peticiones pesadas';

CREATE TABLE data_transactions
(
    id serial NOT NULL,
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
COMMENT ON TABLE data_transactions IS 'Guarda la información de las tablas pesadas';

CREATE TABLE static_values
(
    id serial NOT NULL,
    id_parent integer,
    key character varying NOT NULL,
    value character varying,
    aux1 character varying,
    aux2 character varying,
    aux3 character varying,
    status boolean NOT NULL DEFAULT true,
    PRIMARY KEY (id)
);
COMMENT ON TABLE static_values IS 'Valores no encriptados que sirven como referencia de datos recurrentes';