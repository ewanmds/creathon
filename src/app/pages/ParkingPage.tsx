import { useState } from 'react';
import { ParkingCircle, MapPin, Shield, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useUser } from '../context/UserContext';
import { toast } from 'sonner';

interface ParkingLocation {
  id: string;
  name: string;
  address: string;
  capacity: number;
  available: number;
  price: string;
  features: string[];
  securityLevel: 'Haute' | 'Moyenne';
}

export function ParkingPage() {
  const { user, updateUser } = useUser();
  const [selectedParking, setSelectedParking] = useState<string | null>(null);
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');

  const parkings: ParkingLocation[] = [
    {
      id: '1',
      name: 'Parking Vélo Gare de Lyon',
      address: 'Place Louis-Armand, 75012 Paris',
      capacity: 150,
      available: 42,
      price: 'Gratuit',
      features: ['Surveillance 24h/24', 'Vidéosurveillance', 'Accès contrôlé', 'Abri couvert'],
      securityLevel: 'Haute',
    },
    {
      id: '2',
      name: 'VéloPark Châtelet',
      address: 'Place du Châtelet, 75001 Paris',
      capacity: 200,
      available: 78,
      price: '2€/jour',
      features: ['Casiers sécurisés', 'Station de réparation', 'Vidéosurveillance', 'Couvert'],
      securityLevel: 'Haute',
    },
    {
      id: '3',
      name: 'Consigne Vélo République',
      address: 'Place de la République, 75011 Paris',
      capacity: 100,
      available: 23,
      price: '1€/jour',
      features: ['Accès badge', 'Vidéosurveillance', 'Couvert'],
      securityLevel: 'Haute',
    },
    {
      id: '4',
      name: 'Parking Montparnasse',
      address: 'Gare Montparnasse, 75015 Paris',
      capacity: 120,
      available: 56,
      price: 'Gratuit',
      features: ['Accès libre', 'Vidéosurveillance', 'Partiellement couvert'],
      securityLevel: 'Moyenne',
    },
    {
      id: '5',
      name: 'Vélostation La Défense',
      address: 'Parvis de La Défense, 92400 Courbevoie',
      capacity: 300,
      available: 145,
      price: '3€/jour',
      features: ['Surveillance gardien', 'Casiers individuels', 'Atelier réparation', 'Couvert'],
      securityLevel: 'Haute',
    },
  ];

  const handleReservation = () => {
    if (!user) {
      toast.error('Veuillez d\'abord créer votre profil');
      return;
    }

    if (!selectedParking || !reservationDate || !reservationTime) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    const parking = parkings.find(p => p.id === selectedParking);
    if (!parking) return;

    const newReservation = {
      id: Date.now().toString(),
      location: parking.name,
      date: reservationDate,
      time: reservationTime,
    };

    updateUser({
      parkingReservations: [...(user.parkingReservations || []), newReservation],
    });

    toast.success(`Place réservée au ${parking.name}`);
    setSelectedParking(null);
    setReservationDate('');
    setReservationTime('');
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Réservation stationnement vélo</h1>
        <p className="text-lg text-gray-600">
          Réservez à l'avance une place dans un stationnement sécurisé pour ne plus avoir 
          à vous inquiéter où laisser votre vélo une fois arrivé.
        </p>
      </div>

      {/* Info Card */}
      <Card className="mb-8 bg-red-50 border-red-200">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <Shield className="size-6 text-red-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-red-900 mb-1">Stationnement sécurisé</p>
              <p className="text-sm text-red-800">
                Tous nos parkings partenaires offrent une sécurité renforcée : vidéosurveillance, 
                accès contrôlé et/ou surveillance. Stationnez l'esprit tranquille.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Parking List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Parkings disponibles</h2>
          
          {parkings.map((parking) => (
            <Card 
              key={parking.id}
              className={`hover:shadow-lg transition-shadow cursor-pointer ${
                selectedParking === parking.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedParking(parking.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{parking.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <MapPin className="size-4" />
                      <span>{parking.address}</span>
                    </div>
                  </div>
                  <Badge 
                    className={parking.securityLevel === 'Haute' ? 'bg-green-600' : 'bg-orange-600'}
                  >
                    Sécurité {parking.securityLevel}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{parking.price}</p>
                      <p className="text-sm text-gray-600">
                        {parking.available}/{parking.capacity} places disponibles
                      </p>
                    </div>
                    <div className={`size-20 rounded-full flex items-center justify-center ${
                      parking.available > 50 ? 'bg-green-100' :
                      parking.available > 20 ? 'bg-orange-100' :
                      'bg-red-100'
                    }`}>
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${
                          parking.available > 50 ? 'text-green-600' :
                          parking.available > 20 ? 'text-orange-600' :
                          'text-red-600'
                        }`}>
                          {parking.available}
                        </div>
                        <div className="text-xs text-gray-600">libres</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold mb-2">Équipements :</p>
                    <div className="flex flex-wrap gap-2">
                      {parking.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs gap-1">
                          <CheckCircle className="size-3" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {selectedParking === parking.id && (
                    <div className="pt-2">
                      <Badge variant="default" className="gap-1">
                        <CheckCircle className="size-3" />
                        Sélectionné
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reservation Form */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Réserver une place</CardTitle>
              <CardDescription>
                Sélectionnez un parking et choisissez votre créneau
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedParking && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm font-semibold text-blue-900 mb-1">Parking sélectionné</p>
                  <p className="text-sm text-blue-800">
                    {parkings.find(p => p.id === selectedParking)?.name}
                  </p>
                </div>
              )}

              <div>
                <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                  <Calendar className="size-4" />
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                  min={getTodayDate()}
                  disabled={!selectedParking}
                />
              </div>

              <div>
                <Label htmlFor="time" className="flex items-center gap-2 mb-2">
                  <Clock className="size-4" />
                  Heure d'arrivée
                </Label>
                <Input
                  id="time"
                  type="time"
                  value={reservationTime}
                  onChange={(e) => setReservationTime(e.target.value)}
                  disabled={!selectedParking}
                />
              </div>

              <Button
                className="w-full gap-2"
                onClick={handleReservation}
                disabled={!selectedParking || !reservationDate || !reservationTime}
              >
                <ParkingCircle className="size-4" />
                Confirmer la réservation
              </Button>

              {!selectedParking && (
                <p className="text-sm text-gray-500 text-center">
                  Sélectionnez d'abord un parking dans la liste
                </p>
              )}
            </CardContent>
          </Card>

          {/* My Reservations */}
          {user && user.parkingReservations && user.parkingReservations.length > 0 && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Mes réservations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {user.parkingReservations.slice(-3).reverse().map((reservation) => (
                  <div key={reservation.id} className="border-l-4 border-blue-500 pl-3 py-2">
                    <p className="font-semibold text-sm">{reservation.location}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                      <Calendar className="size-3" />
                      <span>{new Date(reservation.date).toLocaleDateString('fr-FR')}</span>
                      <span>•</span>
                      <Clock className="size-3" />
                      <span>{reservation.time}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
