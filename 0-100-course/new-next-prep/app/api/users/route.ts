import { NextResponse } from "next/server";
import {User} from "@/types/types";

export async function GET() {
  try {
    const users: User[] = [
      { id: 1, name: "Ayush Shah", email: "aashah2003@gmail.com" },
      { id: 2, name: "Aryan Shah", email: "aryan@gmail.com" },
    ];
    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error in GET /api/users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
