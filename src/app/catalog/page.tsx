import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Beginner's Strength Training",
    description: "Perfect for those new to weightlifting. Learn proper form and build a solid foundation.",
    price: "$49",
    duration: "4 weeks",
    image: "🏋️"
  },
  {
    id: 2,
    title: "Advanced Muscle Building",
    description: "Take your gains to the next level with advanced techniques and programming.",
    price: "$89",
    duration: "8 weeks",
    image: "💪"
  },
  {
    id: 3,
    title: "Cardio & Fat Loss",
    description: "Efficient cardio routines designed to maximize fat burning and improve endurance.",
    price: "$39",
    duration: "6 weeks",
    image: "🏃"
  },
  {
    id: 4,
    title: "Functional Fitness",
    description: "Real-world movement patterns for everyday strength and mobility.",
    price: "$59",
    duration: "5 weeks",
    image: "🤸"
  },
  {
    id: 5,
    title: "Home Workout Essentials",
    description: "Get fit at home with minimal equipment. Perfect for busy schedules.",
    price: "$29",
    duration: "4 weeks",
    image: "🏠"
  },
  {
    id: 6,
    title: "Nutrition & Meal Prep",
    description: "Learn how to fuel your workouts and optimize your nutrition for results.",
    price: "$69",
    duration: "6 weeks",
    image: "🥗"
  }
]

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Course Catalog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive collection of fitness courses designed to help you reach your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{course.image}</div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                <Link href={`/product/${course.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}