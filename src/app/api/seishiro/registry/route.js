import { NextResponse } from "next/server"
import actions from "../../../../actions/actions"

export async function GET(req) {
  const responsebook = actions.BookRegistry()

  return NextResponse.json(responsebook)
}