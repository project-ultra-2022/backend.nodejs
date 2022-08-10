/*# Tabla 1 encripted_parameters*/
CREATE TABLE public.encripted_parameters
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
CREATE TABLE public.api_micro_services
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
CREATE TABLE public.services
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
        REFERENCES public.api_micro_services (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);
/* Tabla 4*/
CREATE TABLE public.processes
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
        REFERENCES public.services (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);
/*tabla 5*/
CREATE TABLE public.data_transactions
(
    id serial NOT NULL,
    id_process integer NOT NULL,
    data text NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    downladed boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id),
    CONSTRAINT id_process FOREIGN KEY (id_process)
        REFERENCES public.processes (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);
/*tabla 6*/
CREATE TABLE public.static_values
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