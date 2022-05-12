<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "name" => $this->faker->unique()->word(),
            "category_id" => $this->faker->numberBetween(1, 5),
            "code" => $this->faker->unique()->regexify('[A-Z]{5}[0-4]{3}'),
            "price" => $this->faker->numberBetween(1, 99),
            "amount" => $this->faker->randomDigit()
        ];
    }
}
