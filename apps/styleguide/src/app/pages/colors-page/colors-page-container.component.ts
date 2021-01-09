import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid grid-cols-1 gap-8">
      <div>
        <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div class="w-32 flex-shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-semibold text-gray-900">Gray</div>
              <div><code class="text-xs text-gray-500">colors.coolGray</code></div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(249, 250, 251);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">50</div>
                <div>#F9FAFB</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(243, 244, 246);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">100</div>
                <div>#F3F4F6</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(229, 231, 235);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">200</div>
                <div>#E5E7EB</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(209, 213, 219);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">300</div>
                <div>#D1D5DB</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(156, 163, 175);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">400</div>
                <div>#9CA3AF</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(107, 114, 128);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">500</div>
                <div>#6B7280</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(75, 85, 99);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">600</div>
                <div>#4B5563</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(55, 65, 81);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">700</div>
                <div>#374151</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(31, 41, 55);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">800</div>
                <div>#1F2937</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(17, 24, 39);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">900</div>
                <div>#111827</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div class="w-32 flex-shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-semibold text-gray-900">Red</div>
              <div><code class="text-xs text-gray-500">colors.red</code></div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(254, 242, 242);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">50</div>
                <div>#FEF2F2</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(254, 226, 226);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">100</div>
                <div>#FEE2E2</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(254, 202, 202);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">200</div>
                <div>#FECACA</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(252, 165, 165);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">300</div>
                <div>#FCA5A5</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(248, 113, 113);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">400</div>
                <div>#F87171</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(239, 68, 68);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">500</div>
                <div>#EF4444</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(220, 38, 38);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">600</div>
                <div>#DC2626</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(185, 28, 28);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">700</div>
                <div>#B91C1C</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(153, 27, 27);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">800</div>
                <div>#991B1B</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(127, 29, 29);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">900</div>
                <div>#7F1D1D</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div class="w-32 flex-shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-semibold text-gray-900">Yellow</div>
              <div><code class="text-xs text-gray-500">colors.amber</code></div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(255, 251, 235);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">50</div>
                <div>#FFFBEB</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(254, 243, 199);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">100</div>
                <div>#FEF3C7</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(253, 230, 138);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">200</div>
                <div>#FDE68A</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(252, 211, 77);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">300</div>
                <div>#FCD34D</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(251, 191, 36);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">400</div>
                <div>#FBBF24</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(245, 158, 11);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">500</div>
                <div>#F59E0B</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(217, 119, 6);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">600</div>
                <div>#D97706</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(180, 83, 9);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">700</div>
                <div>#B45309</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(146, 64, 14);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">800</div>
                <div>#92400E</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(120, 53, 15);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">900</div>
                <div>#78350F</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div class="w-32 flex-shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-semibold text-gray-900">Green</div>
              <div><code class="text-xs text-gray-500">colors.emerald</code></div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(236, 253, 245);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">50</div>
                <div>#ECFDF5</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(209, 250, 229);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">100</div>
                <div>#D1FAE5</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(167, 243, 208);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">200</div>
                <div>#A7F3D0</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(110, 231, 183);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">300</div>
                <div>#6EE7B7</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(52, 211, 153);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">400</div>
                <div>#34D399</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(16, 185, 129);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">500</div>
                <div>#10B981</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(5, 150, 105);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">600</div>
                <div>#059669</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(4, 120, 87);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">700</div>
                <div>#047857</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(6, 95, 70);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">800</div>
                <div>#065F46</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(6, 78, 59);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">900</div>
                <div>#064E3B</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div class="w-32 flex-shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-semibold text-gray-900">Blue</div>
              <div><code class="text-xs text-gray-500">colors.blue</code></div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(239, 246, 255);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">50</div>
                <div>#EFF6FF</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(219, 234, 254);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">100</div>
                <div>#DBEAFE</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(191, 219, 254);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">200</div>
                <div>#BFDBFE</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(147, 197, 253);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">300</div>
                <div>#93C5FD</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(96, 165, 250);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">400</div>
                <div>#60A5FA</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(59, 130, 246);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">500</div>
                <div>#3B82F6</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(37, 99, 235);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">600</div>
                <div>#2563EB</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(29, 78, 216);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">700</div>
                <div>#1D4ED8</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(30, 64, 175);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">800</div>
                <div>#1E40AF</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(30, 58, 138);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">900</div>
                <div>#1E3A8A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div class="w-32 flex-shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-semibold text-gray-900">Indigo</div>
              <div><code class="text-xs text-gray-500">colors.indigo</code></div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(238, 242, 255);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">50</div>
                <div>#EEF2FF</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(224, 231, 255);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">100</div>
                <div>#E0E7FF</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(199, 210, 254);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">200</div>
                <div>#C7D2FE</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(165, 180, 252);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">300</div>
                <div>#A5B4FC</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(129, 140, 248);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">400</div>
                <div>#818CF8</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(99, 102, 241);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">500</div>
                <div>#6366F1</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(79, 70, 229);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">600</div>
                <div>#4F46E5</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(67, 56, 202);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">700</div>
                <div>#4338CA</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(55, 48, 163);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">800</div>
                <div>#3730A3</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(49, 46, 129);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">900</div>
                <div>#312E81</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div class="w-32 flex-shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-semibold text-gray-900">Purple</div>
              <div><code class="text-xs text-gray-500">colors.violet</code></div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(245, 243, 255);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">50</div>
                <div>#F5F3FF</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(237, 233, 254);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">100</div>
                <div>#EDE9FE</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(221, 214, 254);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">200</div>
                <div>#DDD6FE</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(196, 181, 253);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">300</div>
                <div>#C4B5FD</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(167, 139, 250);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">400</div>
                <div>#A78BFA</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(139, 92, 246);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">500</div>
                <div>#8B5CF6</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(124, 58, 237);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">600</div>
                <div>#7C3AED</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(109, 40, 217);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">700</div>
                <div>#6D28D9</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(91, 33, 182);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">800</div>
                <div>#5B21B6</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(76, 29, 149);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">900</div>
                <div>#4C1D95</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
          <div class="w-32 flex-shrink-0">
            <div class="h-10 flex flex-col justify-center">
              <div class="text-sm font-semibold text-gray-900">Pink</div>
              <div><code class="text-xs text-gray-500">colors.pink</code></div>
            </div>
          </div>
          <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(253, 242, 248);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">50</div>
                <div>#FDF2F8</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(252, 231, 243);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">100</div>
                <div>#FCE7F3</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(251, 207, 232);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">200</div>
                <div>#FBCFE8</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(249, 168, 212);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">300</div>
                <div>#F9A8D4</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(244, 114, 182);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">400</div>
                <div>#F472B6</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(236, 72, 153);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">500</div>
                <div>#EC4899</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(219, 39, 119);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">600</div>
                <div>#DB2777</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(190, 24, 93);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">700</div>
                <div>#BE185D</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(157, 23, 77);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">800</div>
                <div>#9D174D</div>
              </div>
            </div>
            <div class="space-y-1.5">
              <div
                class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0"
                style="background-color: rgb(131, 24, 67);"
              ></div>
              <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
                <div class="w-6 font-medium text-gray-900">900</div>
                <div>#831843</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ColorsPageContainerComponent {}
