#include <FastLED.h>

#define NUM_LEDS 1
#define DATA_PIN 2

CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);
  Serial.begin(9600);
}

void loop() {
  // value from potentiometer varies from 0 to 1023
  int potValue = analogRead(A5);
  Serial.println(potValue);

  // we need a value from 0 to 255
  int mappedValue = map(potValue, 0, 1023, 0, 255);

  CRGB rgb = CHSV(mappedValue, 255, 255);

  leds[0].setRGB(rgb.r, rgb.g, rgb.b);
  FastLED.show();
  
  delay(1);
}
