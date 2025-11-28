-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT,
    "department" TEXT,
    "level" TEXT,
    "forum" TEXT,
    "paymentStatus" BOOLEAN NOT NULL DEFAULT false,
    "full_name" TEXT,
    "phone" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_email_key" ON "profile"("email");
