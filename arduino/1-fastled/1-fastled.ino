#include "FastLED.h"
#define NUM_LEDS 1
CRGB leds[NUM_LEDS];

void setup() {
  FastLED.addLeds<NEOPIXEL, 2>(leds, NUM_LEDS);
}

void loop() {
  leds[0] = CRGB::Red;
  FastLED.show();
  delay(1000);

  leds[0] = CRGB::Green;
  FastLED.show();
  delay(1000);

  leds[0] = CRGB::Blue;
  FastLED.show();
  delay(1000);
}
