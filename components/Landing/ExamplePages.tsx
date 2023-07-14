import { Box, Heading, HStack, Image, VStack } from '@chakra-ui/react'
const ExamplePages = ({ isMobile }: { isMobile: boolean | undefined }) => {
  const images = ['amy', 'cce', 'rochan']
  return (
    <>
      <VStack spacing={2} display={{ base: 'block', md: 'none' }}>
        <Heading>It can load in {`<`}1 second</Heading>
        <Heading fontWeight="black" bg="purple.200">
          Seriously. Try Now 👇{' '}
        </Heading>
      </VStack>

      <HStack pt={4} spacing={{ base: 12, lg: 20 }} justify="center">
        {images.map((image, index) => (
          <Box
            display={{
              base: index === 0 || index == 2 ? 'block' : 'none',
              md: 'block',
            }}
            _hover={
              !isMobile
                ? { transform: 'scale(1.01) ', opacity: 0.8 }
                : {
                    opacity: 0.8,
                  }
            }
            transitionDuration="0.2s"
            key={index}
            border="1px"
            cursor="pointer"
            borderWidth={6}
            p={1}
            w={{ base: 32, md: 48, lg: 60 }}
            rounded="xl"
            onClick={() => {
              window.open(`https://kytelink.com/${image}`)
            }}
          >
            <Image alt="index" src={`/assets/landing/users/${image}.png`} />
          </Box>
        ))}
      </HStack>
    </>
  )
}

export default ExamplePages
