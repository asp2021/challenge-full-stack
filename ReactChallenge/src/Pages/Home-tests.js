import React from 'react'
import {screen, render} from '@testing-library/react'

import {Home} from './'

describe('Home', ()=> {
    it('must display a title', () => {
        render(<Home/>)
        expect(screen.queryByText(/home page/i)).toBeInTheDocument()
    })
})


