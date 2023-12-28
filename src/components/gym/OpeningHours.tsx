import {Box, ChevronRightIcon, HStack, Heading, Pressable, Text, VStack, View} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import {OpeningsHours} from '@cjbreg/toplogger-sdk/Models/Gym';
import {currentDay} from '../../helpers/openingHours';

interface OpeningHoursProps {
    hours: OpeningsHours;
}

interface DayProps {
    day : string;
    hours: OpeningsHours;
}

const Day = (props: DayProps) => {
    const {day, hours} = props;

    return (
        <HStack
            justifyContent='space-between'
        >
            <Text>
                {day}
            </Text>

            <HStack
                justifyContent='space-between'
                gap='$2'
            >
                {Object.keys(hours.days[day].items).splice(0, 2).map((item, index) => (
                    <Box
                        key={index}
                    >
                        <Text>
                            {hours.days[day].closed && index !== 1 ? 'Closed' :
                                hours.days[day].items[item]
                            }
                        </Text>
                    </Box>

                ))}
            </HStack>
        </HStack>
    );
};

const OpeningHours = (props: OpeningHoursProps) => {
    const {hours} = props;

    const [isCollapsed, setIsCollapsed] = useState(true);
    const current = currentDay;

    const _titleRight = (
        <Box style={{transform : [{rotate: !isCollapsed ? '90deg' : '270deg'}]}}>
            <ChevronRightIcon
                size='2xl'
                color='$pastelRed'
                $dark-color='$parchmentTertiary'
            />
        </Box>
    );

    return (
        <View>
            <Pressable
                onPress={() => setIsCollapsed(!isCollapsed)}
            >
                <VStack>

                    <HStack
                        justifyContent='space-between'
                        alignContent='center'
                    >
                        <VStack flex={1}>
                            <Heading>
                                Opening Hours
                            </Heading>
                        </VStack>

                        <Box>

                            {_titleRight}
                        </Box>
                    </HStack>

                    {isCollapsed &&
                    <Day
                        day={current}
                        hours={hours}
                    />
                    }
                </VStack>
            </Pressable>

            <Collapsible
                collapsed={isCollapsed}
            >
                <VStack
                    gap='$1'
                >
                    {Object.keys(hours.days).map((day, index) => (
                        <Day
                            key={index}
                            day={day}
                            hours={hours}
                        />
                    ))}
                </VStack>
            </Collapsible>
        </View>
    );
};

export default React.memo(OpeningHours);
