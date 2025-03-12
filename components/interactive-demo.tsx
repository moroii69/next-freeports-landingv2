"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Trash2, RefreshCw, Search } from "lucide-react"
import { motion } from "framer-motion"

// Mock data for the demo
const initialPorts = [
  { id: 1, port: 3000, pid: 12345, name: "next-dev", status: "active" },
  { id: 2, port: 5432, pid: 23456, name: "postgres", status: "active" },
  { id: 3, port: 8080, pid: 34567, name: "vite-dev", status: "active" },
  { id: 4, port: 4000, pid: 45678, name: "express-server", status: "active" },
  { id: 5, port: 27017, pid: 56789, name: "mongodb", status: "active" },
]

export function InteractiveDemo() {
  const [ports, setPorts] = useState(initialPorts)
  const [searchTerm, setSearchTerm] = useState("")
  const [isRefreshing, setIsRefreshing] = useState(false)

  const filteredPorts = ports.filter(
    (port) =>
      port.port.toString().includes(searchTerm) ||
      port.name.includes(searchTerm) ||
      port.pid.toString().includes(searchTerm),
  )

  const handleKillPort = (id: number) => {
    setPorts(ports.filter((port) => port.id !== id))
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setPorts(initialPorts)
      setIsRefreshing(false)
    }, 1000)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Try It Yourself</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[800px] mx-auto">
            Interactive demo of the port management interface
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-background rounded-xl border shadow-lg overflow-hidden">
          <div className="p-4 border-b flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search ports, processes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 w-full"
              />
            </div>
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Port</TableHead>
                  <TableHead>PID</TableHead>
                  <TableHead>Process Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPorts.length > 0 ? (
                  filteredPorts.map((port) => (
                    <TableRow key={port.id}>
                      <TableCell className="font-medium">{port.port}</TableCell>
                      <TableCell>{port.pid}</TableCell>
                      <TableCell>{port.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                          {port.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleKillPort(port.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Kill port {port.port}</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                      No ports found matching your search
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="p-4 border-t bg-muted/20 text-sm text-muted-foreground">
            <p>This is a demo interface. In the real CLI, you would use the commands shown in the examples above.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

