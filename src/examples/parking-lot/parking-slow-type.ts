type ParkingSlotTypeName = 'TwoWheeler' | 'Compact' | 'Medium' | 'Large';

export class ParkingSlotType {
  private constructor(
    public readonly name: ParkingSlotTypeName,
    private readonly priceCalculator: (duration: number) => number
  ) {}

  getPriceForParking(duration: number): number {
    return this.priceCalculator(duration);
  }

  static readonly TwoWheeler = new ParkingSlotType('TwoWheeler', duration => duration * 0.05);
  static readonly Compact = new ParkingSlotType('Compact', duration => duration * 0.075);
  static readonly Medium = new ParkingSlotType('Medium', duration => duration * 0.09);
  static readonly Large = new ParkingSlotType('Large', duration => duration * 0.10);

  static values(): ParkingSlotType[] {
    return [
      ParkingSlotType.TwoWheeler,
      ParkingSlotType.Compact,
      ParkingSlotType.Medium,
      ParkingSlotType.Large,
    ];
  }
}
