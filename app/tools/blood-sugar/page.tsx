"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, TrendingUp, TrendingDown, Minus } from "lucide-react"

interface Reading {
  value: number
  time: string
  note: string
}

export default function BloodSugarTracker() {
  const [readings, setReadings] = useState<Reading[]>([])
  const [currentValue, setCurrentValue] = useState("")
  const [currentNote, setCurrentNote] = useState("")

  const addReading = () => {
    if (currentValue) {
      const newReading: Reading = {
        value: parseFloat(currentValue),
        time: new Date().toLocaleTimeString(),
        note: currentNote
      }
      setReadings([newReading, ...readings])
      setCurrentValue("")
      setCurrentNote("")
    }
  }

  const getStatus = (value: number) => {
    if (value < 4) return { text: "Low", color: "text-red-500", icon: TrendingDown }
    if (value > 7) return { text: "High", color: "text-orange-500", icon: TrendingUp }
    return { text: "Normal", color: "text-green-500", icon: Minus }
  }

  const average = readings.length > 0 
    ? (readings.reduce((sum, r) => sum + r.value, 0) / readings.length).toFixed(1)
    : "0"

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Blood Sugar Tracker</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your blood glucose levels and identify patterns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Average
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{average} mmol/L</p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Total Readings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{readings.length}</p>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Status</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-500">Tracking</p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-effect mb-8">
            <CardHeader>
              <CardTitle>Add New Reading</CardTitle>
              <CardDescription>Enter your blood glucose reading in mmol/L</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Blood Sugar (mmol/L)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={currentValue}
                    onChange={(e) => setCurrentValue(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
                    placeholder="5.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Note (optional)</label>
                  <input
                    type="text"
                    value={currentNote}
                    onChange={(e) => setCurrentNote(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
                    placeholder="Before breakfast"
                  />
                </div>
                <Button onClick={addReading} className="w-full">
                  Add Reading
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect">
            <CardHeader>
              <CardTitle>Recent Readings</CardTitle>
            </CardHeader>
            <CardContent>
              {readings.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No readings yet. Add your first reading above.
                </p>
              ) : (
                <div className="space-y-3">
                  {readings.map((reading, index) => {
                    const status = getStatus(reading.value)
                    const StatusIcon = status.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 border border-slate-700"
                      >
                        <div className="flex items-center gap-4">
                          <StatusIcon className={`w-5 h-5 ${status.color}`} />
                          <div>
                            <p className="font-bold text-lg">{reading.value} mmol/L</p>
                            <p className="text-sm text-muted-foreground">{reading.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-medium ${status.color}`}>{status.text}</p>
                          {reading.note && (
                            <p className="text-sm text-muted-foreground">{reading.note}</p>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-8 p-6 glass-effect rounded-lg">
            <h3 className="font-bold text-lg mb-2">About Blood Sugar Levels</h3>
            <p className="text-muted-foreground mb-4">
              Normal fasting blood sugar levels are between 4.0 and 5.4 mmol/L. 
              After meals, levels typically rise but should return to normal within 2-3 hours.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-red-500" />
                <span><strong>Low:</strong> Below 4.0 mmol/L - May need immediate attention</span>
              </li>
              <li className="flex items-center gap-2">
                <Minus className="w-4 h-4 text-green-500" />
                <span><strong>Normal:</strong> 4.0 - 7.0 mmol/L - Target range</span>
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <span><strong>High:</strong> Above 7.0 mmol/L - Monitor and adjust</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
