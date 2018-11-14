import React from 'react'
import { render } from 'react-testing-library';
import EditLayoutModal from '../components/EditLayout';

describe('Edit Layout Component', () => {
  it('should render right content', () => {
    const { getByLabelText } = render(<EditLayoutModal isOpen/>)
  })
  
})
