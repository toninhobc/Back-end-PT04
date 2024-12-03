/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Usuario_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Usuario";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "foto_perfil" BLOB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioID" INTEGER NOT NULL,
    "professor" TEXT NOT NULL,
    "disciplina" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Avaliacao_usuarioID_fkey" FOREIGN KEY ("usuarioID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("conteudo", "createdAt", "disciplina", "id", "professor", "updatedAt", "usuarioID") SELECT "conteudo", "createdAt", "disciplina", "id", "professor", "updatedAt", "usuarioID" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
