import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FunnelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Fitness Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get our FREE comprehensive workout guide and start building your dream physique today!
          </p>

          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Get Your FREE Course</CardTitle>
              <CardDescription>
                Join thousands who&apos;ve transformed their fitness
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <Button type="submit" className="w-full">
                  Get Free Course
                </Button>
              </form>
              <p className="text-sm text-gray-500">
                No spam, unsubscribe at any time
              </p>
            </CardContent>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                💪
              </div>
              <h3 className="font-semibold">Expert Training</h3>
              <p className="text-gray-600">Professional workout routines</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                📱
              </div>
              <h3 className="font-semibold">Easy to Follow</h3>
              <p className="text-gray-600">Step-by-step guidance</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                🏆
              </div>
              <h3 className="font-semibold">Proven Results</h3>
              <p className="text-gray-600">Thousands of success stories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}