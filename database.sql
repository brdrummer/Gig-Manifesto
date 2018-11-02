CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

CREATE TABLE "profile" (
    id SERIAL PRIMARY KEY,
    name VARCHAR (120),
    email VARCHAR(120),
    bands VARCHAR (1000),
    city VARCHAR (120),
    image_url VARCHAR (2083),
    user_profile_id INT REFERENCES person
);

CREATE TABLE "gigs" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(120),
    "date" VARCHAR(120),
    "startTime" VARCHAR(120),
    "soundCheck" VARCHAR(120),
    "address" VARCHAR(240),
    "entryFee" INTEGER,
    "image_url" VARCHAR (2083),
    "user_gig_id" INT REFERENCES person
);