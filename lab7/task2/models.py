from models import Car, Motorcycle, Truck 
def main ():
    car = Car("Toyota", "Camry", 2020, 4)
    motorcycle = Motorcycle("Harley-Davidson", "Street 750", 2019, False)
    truck = Truck("Ford", "F-150", 2021, 1000)

    print(car.get_description())
    print(car.start_engine())
    print(car.stop_engine())
    print(car)

    print(motorcycle.get_description())
    print(motorcycle.start_engine())
    print(motorcycle.stop_engine())
    print(motorcycle)

    print(truck.get_description())
    print(truck.start_engine())
    print(truck.stop_engine())
    print(truck)