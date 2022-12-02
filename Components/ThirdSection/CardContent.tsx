import React from 'react'
import { IconType } from 'react-icons/lib'
import { TbPlant } from 'react-icons/tb'

type CardContentType = {
  title: string
  icon: IconType
  id: string
  number: string
}[]

const cardContent: CardContentType = [
  { title: 'Plants Sold', icon: TbPlant, id: 'plants-sold', number: '34,887' },
  { title: 'Customers', icon: TbPlant, id: 'customers', number: '12,265' },
  { title: 'Customer Care', icon: TbPlant, id: 'customer-care', number: '24/7' },
  { title: 'Variety', icon: TbPlant, id: 'variety', number: '1,499' }
]

export default cardContent