import React, { FC, ReactElement, useEffect, useState } from 'react'
import NigeriaFlag from '../atoms/nigeria-flag'
import GhanaFlag from '../atoms/ghana-flag'

interface IProps {
    country: "Nigeria" | "Ghana"
}

const TaxGuideCountryFlag: FC<IProps> = ({ country }) => {
    const [flag, setFlag] = useState<ReactElement>()

    useEffect(() => {
        if (country) {
            switch (country.toLowerCase()) {
                case 'nigeria':
                    setFlag(<NigeriaFlag />)
                    break
                case 'ghana':
                    setFlag(<GhanaFlag />)
                    break
                default:
                    setFlag(<NigeriaFlag />)
            }
        }
    }, [])
    return (
        <div>{flag}</div>
    )
}

export default TaxGuideCountryFlag