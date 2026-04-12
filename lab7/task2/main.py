class Vehicle:
    def __init__ (self,brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.engine_start =  False
    
    def start_engine(self):
        self.engine_start = True
        return f"The {self.brand} {self.model} engine has started."
    
    def get_description(self):
        return f"{self.year} {self.brand} {self.model}"
    
    def stop_engine(self):
        self.engine_start = False
        return f"The {self.brand} {self.model} engine has stopped."
    
    def __str__(self):
        return f"[Vehicle] {self.brand} {self.model} ({self.year})"
    
    class Car(Vehicle):
        def __init__(self, brand, model, year, num_doors):
            super().__init__(brand, model, year)
            self.num_doors = num_doors  
        
        def get_description(self): 
            return f"{super().get_description()} with {self.num_doors} doors"
        
        def __str__(self): 
            return f"[Car] {self.brand} {self.model} ({self.year}), {self.num_doors} doors"
        
    class Motorcycle(Vehicle):
        def __init__(self, brand, model, year, has_sidecar):
            super().__init__(brand, model, year)
            self.has_sidecar = has_sidecar

        def get_description(self):
            sidecar_info = "with sidecar" if self.has_sidecar else "without sidecar"
            return f"{super().get_description()} {sidecar_info}"

        def __str__(self):
            sidecar_info = "with sidecar" if self.has_sidecar else "without sidecar"
            return f"[Motorcycle] {self.brand} {self.model} ({self.year}), {sidecar_info}"
        
    class Truck(Vehicle):
        def __init__(self, brand, model, year, payload_capacity):
            super().__init__(brand, model, year)
            self.payload_capacity = payload_capacity

        def get_description(self):
            return f"{super().get_description()} with payload capacity of {self.payload_capacity} kg"

        def __str__(self):
            return f"[Truck] {self.brand} {self.model} ({self.year}), payload capacity: {self.payload_capacity} kg"