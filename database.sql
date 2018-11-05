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



https://pbs.twimg.com/profile_images/628360021412216832/HFSyvFWI.jpg

INSERT INTO "profile" ("name", "email", "bands", "city", "image_url")
VALUES ('Bobby Rosson', 'brdrummer@hotmail.com', 'Fowke and Friends', 'Saint Paul', 'https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/21752043_476626699363363_2577559094497023295_n.jpg?_nc_cat=105&_nc_ht=scontent.ffcm1-1.fna&oh=4c1e6851beb3bb7cc582bd5201fbeb03&oe=5C4778AC' );

