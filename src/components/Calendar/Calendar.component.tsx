import React from "react";
import { Feather } from "@expo/vector-icons";
import { Calendar as RNCalendar, LocaleConfig } from "react-native-calendars";
import { useTheme } from "styled-components/native";
import { CalendarConfig } from "./Calendar.static";

LocaleConfig.locales["pt-br"] = CalendarConfig;
LocaleConfig.defaultLocale = "pt-br";

export function Calendar() {
  const { colors, fonts } = useTheme();

  return (
    <RNCalendar
      renderArrow={(direction) => {
        return (
          <Feather
            size={24}
            color={colors.text}
            name={direction === "left" ? "chevron-left" : "chevron-right"}
          />
        );
      }}
      headerStyle={{
        backgroundColor: colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: fonts.primary_400,
        textDayHeaderFontFamily: fonts.primary_500,
        textDayHeaderFontSize: 12,
        textMonthFontFamily: fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      minDate={new Date().toDateString()}
    />
  );
}
