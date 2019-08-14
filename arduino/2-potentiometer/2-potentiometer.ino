void setup() {
}

void loop() {
  int potValue = analogRead(A5);
  Serial.println(potValue);
}
