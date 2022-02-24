import React, { useState } from 'react'
import axios from 'axios'
import {
  chakra,
  VStack,
  InputGroup,
  Input,
  InputRightElement,
  useColorModeValue,
  Heading,
  Text,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { SiMailchimp } from 'react-icons/si';

function Subscribe() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()

    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email })
      setState('Success')
      setEmail('')
    } catch (e) {
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <VStack
      alignItems='flex-start'
      w='full'
      p={{ base: 4, md: 6 }}
      bg={useColorModeValue('gray.50', 'gray.700')}
      rounded='md'
      spacing={3}
    >
      <Heading size='md'>Subscribe To My Newsletter</Heading>
      <Text>
        Get Emails From Me About Web Development, Technologies, And Whenever
        I Publish New Content.
      </Text>
      {form.state !== Form.Success && form.state !== Form.Error && (
        <>
          <chakra.form
            name='subscribe-form'
            target='_blank'
            w='full'
            onSubmit={subscribe}
          >
            <InputGroup w='full'>
              <Input
                disabled={form.state === Form.Loading}
                name='email'
                placeholder='tim@apple.com'
                type='email'
                variant='filled'
              />
              <InputRightElement>
                <IconButton
                  aria-label='Subscribe'
                  icon={<Icon as={SiMailchimp} />}
                  isLoading={form.state === Form.Loading}
                  name='subscribe'
                  size='sm'
                  type='submit'
                />
              </InputRightElement>
            </InputGroup>
          </chakra.form>
        {state === 'Error' && (
          <ErrorState className="error-state">{errorMsg}</ErrorState>
        )}
        {state === 'Success' && (
          <SuccessState>Awesome, youve been subscribed!</SuccessState>
        )}
    </Vstack>
  )
}

export default Subscribe
