// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

largestPrimeFactor = n => {
    let primes = [2]
    let biggestFactor = 1

    do {
        for(let i = 0; i <= primes.length; i++) {
    

            // n / current prime

            const currentPrime = primes[i]
            if (n % currentPrime == 0) {
                n /= currentPrime
                if (currentPrime > biggestFactor) {
                    biggestFactor = currentPrime
                }
                while (n % currentPrime == 0) {
                    n /= currentPrime
                } 
            }

            
            // generate a new prime

            let j = primes[primes.length - 1]
            do {                   
                primeFound = primes.some((prime) => {
                    j % prime == 0
                })

                j++
            } while (primeFound)
            primes.push(j)
            
        }
    } while (n > 1)

    return biggestFactor
}

console.log(
    largestPrimeFactor(10)
)