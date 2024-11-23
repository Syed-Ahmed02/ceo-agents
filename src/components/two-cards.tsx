import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function TwoCards() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Steve Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Mountain landscape"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <CardDescription>
                American businessman, inventor, and investor best known for co-founding the technology company Apple Inc.
              </CardDescription>
              <div className="mt-4">
                <Link href="/chat/bot1">
                  <Button variant="outline">Chat</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Elon Musk</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Beach sunset"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <CardDescription>
                cofounded the electronic payment firm PayPal, and in 2002 he founded SpaceX, a company that makes rockets and spacecraft.
              </CardDescription>
              <div className="mt-4">
                <Link href="/chat/bot2">
                  <Button variant="outline">Chat</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

