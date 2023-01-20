-- CreateTable
CREATE TABLE "HUB_users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HUB_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HUB_companies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "HUB_companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HUB_places" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stret" TEXT,
    "number" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "HUB_places_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HUB_users_email_key" ON "HUB_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "HUB_places_name_key" ON "HUB_places"("name");

-- AddForeignKey
ALTER TABLE "HUB_companies" ADD CONSTRAINT "HUB_companies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "HUB_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HUB_places" ADD CONSTRAINT "HUB_places_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "HUB_companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
