"use client";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

const page = () => {
  const { data: session, status } = useSession();
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const querrySnapshot = await getDocs(collection(db, "notes"));
      const notesArray = querrySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNotes(notesArray);
    } catch (error) {
      console.error(error);
      alert("Error fetching note, Visit console for more information");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <main className="min-h-dvh px-10">
      <div>
        <h1 className="text-center font-semibold lg:text-4xl text-2xl uppercase text-gray-800 lg:py-8 py-3">
          notes list
        </h1>

        {notes.length === 0 ? (
          <p className="text-center font-semibold text-lg">No notes</p>
        ) : (
          <div className="lg:px-10 px-4 bg-gray-50 rounded-md">
            {notes.map((note) => (
              <div className="flex gap-10 p-5">
                <h2 className="font-bold text-lg uppercase">{note.title}</h2>
                {console.log(note.title)}
                <div className="flex flex-col gap-3 w-full">
                  <p className="">{note.body}</p>

                  {status === "loading" ? (<p>...</p>) :
                  status === "unauthenticated" ? (" ") :
                  (
                    <span>
                      Author:{" "}
                      <span className="font-semibold">
                        {session?.user?.name}
                      </span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
