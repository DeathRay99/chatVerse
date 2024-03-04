
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col h-screen border-t">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <Button className="rounded-full" size="icon" variant="ghost">
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <img
              alt="Avatar"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="grid gap-1">
              <h1 className="text-lg font-semibold">Trial</h1>
              <p className="text-sm font-normal leading-none truncate">Online</p>
            </div>
          </div>
        </div>
        <Button size="sm" variant="outline">
          <VideoIcon className="w-4 h-4 mr-2" />
          Video call
        </Button>
      </div>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-60 border-r overflow-auto">
          <div className="grid gap-2 p-4">
            <Link className="flex items-center gap-2 p-2 rounded-md" href="#">
              <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="leading-none truncate">Room 1</div>
            </Link>
            <Link className="flex items-center gap-2 p-2 rounded-md" href="#">
              <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="leading-none truncate">Room 2</div>
            </Link>
            <Link className="flex items-center gap-2 p-2 rounded-md bg-gray-100 dark:bg-gray-800" href="#">
              <img
                alt="Avatar"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="leading-none truncate">Room 3</div>
              <Badge>3</Badge>
            </Link>
           
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-auto p-4">
              <div className="grid gap-2">
                <div className="flex flex-col items-start">
                  <div className="bg-gray-100 rounded-lg dark:bg-gray-800">
                    <div className="p-4">
                      <p className="text-sm">Hi there! How can I help you today?</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Trial, 2:34 PM</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="bg-gray-100 rounded-lg dark:bg-gray-800">
                    <div className="p-4">
                      <p className="text-sm">Hi Trial! I'm having trouble with my internet connection.</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">You, 2:35 PM</p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="p-4">
            <form className="flex gap-4">
              <Textarea className="flex-1 min-h-[40px]" placeholder="Type a message..." />
              <Button type="submit">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}
