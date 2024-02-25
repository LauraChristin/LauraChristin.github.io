

function testSort() {
    var x = [5,3,2,4,1];
   var erg = sort(x);
    alert(erg);
}

function sort(numbers){
    var copy = [];
    for(let k = 0; k < numbers.length; k++){
        copy[k] = numbers[k];
    }
    var currentValue = 0;
    for(let i = 1; i<copy.length; i++){
        currentValue = copy[i];
        var j;
        for(j = i; (j > 0) && (copy[j-1] > currentValue); j--){
            copy[j] = copy[j-1];
        }
        copy[j] = currentValue;
    }
    return copy;


}



/*

private double maxOfArray(double[] array)
{
    double[] sortedArray = sortierer.sort(array);

    return sortedArray[array.Length-1];
}

class Statistik
{
    Sortierer sortierer = new Sortierer();
    public double arithmetischesMittel(double[] numbers)
    {
        double summe = 0;
        double ariMittel = 0;
        for (int i = 0; i < numbers.Length; i++)
        {
            summe += numbers[i];
        }
        ariMittel = summe / numbers.Length;

        return ariMittel;
    }

    public double spannweite(double[] numbers)
    {
        numbers = sortierer.sort(numbers);
        double minimum = numbers[0];
        double maximum = numbers[numbers.Length-1];
        Console.WriteLine("Min: " + minimum);
        Console.WriteLine("Max: " + maximum);
        return maximum - minimum;
    }

    public double median(double[] numbers)
    {
        numbers = sortierer.sort(numbers);
        double median;
        if(numbers.Length % 2 == 0) //n ist gerade
        {
            median = 0.5 * ((numbers[numbers.Length / 2] + numbers[(numbers.Length / 2) - 1]));
        }
        else //n ist ungerade
        {
            median = numbers[(numbers.Length) / 2];
        }
        return median;

    }

    public double kolmogorovSmirnov(double[] x, double[] y)
    {
        double[] vereini = vereinigungsmenge(x, y);

        double[] haeufiX = new double[vereini.Length];
        double[] haeufiY = new double[vereini.Length];

        for (int i = 0; i < vereini.Length; i++)
        {
            haeufiX[i] = relHaeufi(vereini[i], x);
            haeufiY[i] = relHaeufi(vereini[i], y);
        }
        double[] kummuliertHaeufiX = new double[vereini.Length];
        double[] kummuliertHaeufiY = new double[vereini.Length];

        for(int i = 0; i < haeufiX.Length; i++)
        {
            kummuliertHaeufiX[i] = 0;
            kummuliertHaeufiY[i] = 0;
            for (int j = 0; j <= i; j++)
            {
                kummuliertHaeufiX[i] += haeufiX[j];
                kummuliertHaeufiY[i] += haeufiY[j];
            }
        }

        double[] differenz = new double[vereini.Length];
        double diff = 0;
        for(int k = 0; k < vereini.Length; k++)
        {
            diff = kummuliertHaeufiX[k] - kummuliertHaeufiY[k];
            diff = Math.Abs(diff);
            differenz[k] = diff;
        }

        return maxOfArray(differenz);
    }

    public double[] vereinigungsmenge(double[] x, double[] y)
    {
        Dictionary<double, int> verMenge = new Dictionary<double, int>();

        for(int i = 0; i < x.Length; i++)
        {
            try {
                verMenge.Add(x[i], 1);
            } catch (Exception e) { }
            try {
                verMenge.Add(y[i], 1);
            } catch (Exception e) { }
            
        }

        double[] vereinigungsmenge = new double[verMenge.Count];

        for(int i = 0; i < vereinigungsmenge.Length; i++)
        {
            vereinigungsmenge[i] = verMenge.Keys.ElementAt<double>(i);
        }
        return vereinigungsmenge;

    }

    private double relHaeufi(double number, double[] x)
    {
        int anzahl = 0;
        int gesamtAnzahl = x.Length;
        for(int i = 0; i < gesamtAnzahl; i++)
        {
            if(x[i] == number)
            {
                anzahl++;
            }
        }

        return (double)anzahl/(double)gesamtAnzahl;
    }
}


*/