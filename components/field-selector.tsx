"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, MapPin, Plus } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface Field {
  id: string
  name: string
  acres: number
  crop: string
}

interface FieldSelectorProps {
  onFieldChange: (field: Field | null) => void
  className?: string
}

const sampleFields: Field[] = [
  { id: "field1", name: "North Field", acres: 120, crop: "Corn" },
  { id: "field2", name: "South Field", acres: 85, crop: "Soybeans" },
  { id: "field3", name: "East Field", acres: 75, crop: "Wheat" },
  { id: "field4", name: "West Field", acres: 110, crop: "Corn" },
  { id: "field5", name: "Central Field", acres: 130, crop: "Soybeans" },
]

export function FieldSelector({ onFieldChange, className }: FieldSelectorProps) {
  const [open, setOpen] = useState(false)
  const [selectedField, setSelectedField] = useState<Field | null>(null)
  const [fields, setFields] = useState<Field[]>(sampleFields)
  const [addFieldOpen, setAddFieldOpen] = useState(false)
  const [newFieldName, setNewFieldName] = useState("")
  const [newFieldAcres, setNewFieldAcres] = useState("")
  const [newFieldCrop, setNewFieldCrop] = useState("")

  const handleSelectField = (field: Field) => {
    setSelectedField(field)
    setOpen(false)
    onFieldChange(field)
  }

  const handleAddField = () => {
    if (!newFieldName || !newFieldAcres || !newFieldCrop) {
      alert("Please fill in all fields")
      return
    }

    const newField: Field = {
      id: `field${fields.length + 1}`,
      name: newFieldName,
      acres: Number(newFieldAcres),
      crop: newFieldCrop,
    }

    setFields([...fields, newField])
    setNewFieldName("")
    setNewFieldAcres("")
    setNewFieldCrop("")
    setAddFieldOpen(false)
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between bg-[#0a192f]/50 border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
            >
              {selectedField ? selectedField.name : "Select Field"}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[250px] p-0 bg-[#112240] border-[#64ffda]/10 text-white">
            <Command>
              <CommandInput placeholder="Search fields..." className="h-9" />
              <CommandList>
                <CommandEmpty>No fields found.</CommandEmpty>
                <CommandGroup>
                  {fields.map((field) => (
                    <CommandItem
                      key={field.id}
                      value={field.name}
                      onSelect={() => handleSelectField(field)}
                      className="text-white hover:bg-[#64ffda]/10 hover:text-white"
                    >
                      <MapPin className="mr-2 h-4 w-4 text-[#64ffda]" />
                      {field.name}
                      <span className="ml-auto text-xs text-white/70">{field.acres} acres</span>
                      {selectedField?.id === field.id && <Check className="ml-2 h-4 w-4 text-[#64ffda]" />}
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandGroup>
                  <CommandItem
                    onSelect={() => setAddFieldOpen(true)}
                    className="text-[#64ffda] hover:bg-[#64ffda]/10 hover:text-[#64ffda]"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Field
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {selectedField && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setSelectedField(null)
              onFieldChange(null)
            }}
            className="h-8 w-8 text-white/70 hover:bg-[#64ffda]/10 hover:text-white"
          >
            <span className="sr-only">Clear selection</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Button>
        )}
      </div>

      {selectedField && (
        <div className="mt-2 text-sm text-white/70">
          <div className="flex justify-between">
            <span>Crop: {selectedField.crop}</span>
            <span>Size: {selectedField.acres} acres</span>
          </div>
        </div>
      )}

      <Dialog open={addFieldOpen} onOpenChange={setAddFieldOpen}>
        <DialogContent className="bg-[#112240] border-[#64ffda]/10 text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Field</DialogTitle>
            <DialogDescription className="text-white/70">Enter the details for your new field.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Field Name</Label>
              <Input
                id="name"
                value={newFieldName}
                onChange={(e) => setNewFieldName(e.target.value)}
                className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
                placeholder="e.g., North Field"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="acres">Size (acres)</Label>
              <Input
                id="acres"
                type="number"
                value={newFieldAcres}
                onChange={(e) => setNewFieldAcres(e.target.value)}
                className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
                placeholder="e.g., 100"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="crop">Primary Crop</Label>
              <Input
                id="crop"
                value={newFieldCrop}
                onChange={(e) => setNewFieldCrop(e.target.value)}
                className="bg-[#0a192f]/50 border-[#64ffda]/20 text-white"
                placeholder="e.g., Corn"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setAddFieldOpen(false)}
              className="border-[#64ffda]/20 text-white hover:bg-[#64ffda]/10"
            >
              Cancel
            </Button>
            <Button onClick={handleAddField} className="bg-[#64ffda] hover:bg-[#64ffda]/80 text-[#0a192f]">
              Add Field
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

