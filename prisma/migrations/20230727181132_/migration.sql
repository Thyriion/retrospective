-- CreateTable
CREATE TABLE "Retro" (
    "id" SERIAL NOT NULL,
    "completed" TIMESTAMP(3) NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Retro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RetroToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ActionToRetro" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RetroToUser_AB_unique" ON "_RetroToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RetroToUser_B_index" ON "_RetroToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ActionToRetro_AB_unique" ON "_ActionToRetro"("A", "B");

-- CreateIndex
CREATE INDEX "_ActionToRetro_B_index" ON "_ActionToRetro"("B");

-- AddForeignKey
ALTER TABLE "Retro" ADD CONSTRAINT "Retro_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RetroToUser" ADD CONSTRAINT "_RetroToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Retro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RetroToUser" ADD CONSTRAINT "_RetroToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActionToRetro" ADD CONSTRAINT "_ActionToRetro_A_fkey" FOREIGN KEY ("A") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActionToRetro" ADD CONSTRAINT "_ActionToRetro_B_fkey" FOREIGN KEY ("B") REFERENCES "Retro"("id") ON DELETE CASCADE ON UPDATE CASCADE;
