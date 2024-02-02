'use client'

import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/app/[lang]/dictionaries'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select'
import { ARFlag, BrazilFlag, USAFlag } from '../Flags'

const LanguageSelector = () => {
  const router = useRouter()
  const pathName = usePathname()
  const currentLanguage = pathName.replace('/', '')

  const [selectedLang, setSelectedLang] = useState(currentLanguage)

  const handleLangChange = async (newLang: Locale) => {
    // Atualize o estado local
    setSelectedLang(newLang)

    // Atualize a rota para refletir o novo idioma
    router.push(newLang)
  }

  return (
    <Select value={selectedLang} onValueChange={handleLangChange}>
      <SelectTrigger className="fixed right-5 top-5 w-full max-w-36">
        <SelectValue placeholder="Selecione o idioma" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="br">
            <div className="flex items-center gap-3">
              <BrazilFlag className="h-6 w-6" />
              Português
            </div>
          </SelectItem>
          <SelectItem value="en">
            <div className="flex items-center gap-3">
              <USAFlag className="h-6 w-6" />
              Inglês
            </div>
          </SelectItem>
          <SelectItem value="es">
            <div className="flex items-center gap-3">
              <ARFlag className="h-6 w-6" />
              Espanhol
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LanguageSelector
