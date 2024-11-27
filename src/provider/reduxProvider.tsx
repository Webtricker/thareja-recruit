 'use client'

import { store } from "@/redux/store"
import { ReduxProviderPropsType } from "@/types/reduxTypes"
import { FC } from "react"
import { Provider } from "react-redux"

const ReduxProvider:FC<ReduxProviderPropsType> = ({
    children
}) => {
  return (
    <Provider store={store} >
        {children}
    </Provider>
  )
}

export default ReduxProvider