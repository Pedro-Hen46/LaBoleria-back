CREATE TABLE "clients" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"adress" varchar NOT NULL,
	"phone" varchar NOT NULL,
	CONSTRAINT "clients_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "cakes" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL UNIQUE,
	"price" DECIMAL NOT NULL,
	"image" varchar NOT NULL,
	"description" TEXT NOT NULL,
	CONSTRAINT "cakes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "orders" (
	"id" serial NOT NULL,
	"clientId" integer NOT NULL,
	"cakeId" integer NOT NULL,
	"quantity" integer NOT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	"totalPrice" DECIMAL NOT NULL,
	CONSTRAINT "orders_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "orders" ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("clientId") REFERENCES "clients"("id");
ALTER TABLE "orders" ADD CONSTRAINT "orders_fk1" FOREIGN KEY ("cakeId") REFERENCES "cakes"("id");




