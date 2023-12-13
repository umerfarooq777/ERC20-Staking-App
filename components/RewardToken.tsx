import { Box, Card, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useAddress, useContract, useMetadata, useTokenBalance } from "@thirdweb-dev/react";
import { BANANA_TOKEN_ADDRESSES } from "../cost/addresses";

export default function StakeToken() {
    const address = useAddress();
    const { contract: rewardTokenContract, isLoading: loadingStakeToken } = useContract(BANANA_TOKEN_ADDRESSES);
    const { data:MetaData, isLoading:MetaDataLoading, error }: any = useMetadata(rewardTokenContract);

    const { data: tokenBalance, isLoading: loadingTokenBalance } = useTokenBalance(rewardTokenContract, address);
    
    return (
        <Card p={5}>
            <Stack>
                <Skeleton h={10} w={"100%"} isLoaded={!MetaDataLoading}>
                    {
                        MetaData?
                        <Box display="Flex">
                        <Heading> {MetaData?.name}</Heading>
                        <img src={MetaData?.image} alt=""  height={50} width={50}/>
                        </Box>

                        :null
                    }
                </Skeleton>
                <Skeleton h={4} w={"50%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text fontSize={"large"} fontWeight={"bold"}>${tokenBalance?.symbol}</Text>
                </Skeleton>
                <Skeleton h={4} w={"100%"} isLoaded={!loadingStakeToken && !loadingTokenBalance}>
                    <Text>{tokenBalance?.displayValue}</Text>
                </Skeleton>
            </Stack>
        </Card>
    )
}