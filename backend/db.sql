 \c ovya_recrutement



CREATE TABLE IF NOT EXISTS acq(
	id SERIAL PRIMARY KEY,
	nom TEXT NOT NULL,
	email TEXT NOT NULL  UNIQUE,
	password VARCHAR(64)
	)WITH (
  OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS ccial(
	id SERIAL PRIMARY KEY,
	nom TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE
)WITH (
  OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS dossier(
	id SERIAL PRIMARY KEY,
	date_insert DATE NOT NULL DEFAULT CURRENT_DATE,
	ccial_id INT REFERENCES ccial(id)
	) WITH (
  OIDS = FALSE
);

CREATE TABLE IF NOT EXISTS visite(
	id SERIAL PRIMARY KEY,
	date_start DATE NOT NULL,
	date_end DATE NOT NULL,
	acq_id INT NOT NULL REFERENCES acq(id),
	ccial_id INT NOT NULL REFERENCES ccial(id),
	dossier_id INT NOT NULL REFERENCES dossier(id),
	canceled BOOLEAN NOT NULL
	
	)WITH (
  OIDS = FALSE
);

CREATE INDEX fk_dossier_ccial_id_idx ON dossier(ccial_id);
CREATE INDEX fk_visite_acq_id_idx ON visite(acq_id);
CREATE INDEX fk_visite_dossier_id_idx ON visite(dossier_id);
CREATE INDEX fk_visite_ccial_id_idx ON visite(ccial_id);

\d