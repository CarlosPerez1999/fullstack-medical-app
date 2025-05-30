
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model PatientAllergy
 * 
 */
export type PatientAllergy = $Result.DefaultSelection<Prisma.$PatientAllergyPayload>
/**
 * Model Allergy
 * 
 */
export type Allergy = $Result.DefaultSelection<Prisma.$AllergyPayload>
/**
 * Model Hospitalization
 * 
 */
export type Hospitalization = $Result.DefaultSelection<Prisma.$HospitalizationPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Doctor
 * ------------- Doctor -------------
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model DoctorSpeciality
 * 
 */
export type DoctorSpeciality = $Result.DefaultSelection<Prisma.$DoctorSpecialityPayload>
/**
 * Model Speciality
 * 
 */
export type Speciality = $Result.DefaultSelection<Prisma.$SpecialityPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Consult
 * 
 */
export type Consult = $Result.DefaultSelection<Prisma.$ConsultPayload>
/**
 * Model Treatment
 * 
 */
export type Treatment = $Result.DefaultSelection<Prisma.$TreatmentPayload>
/**
 * Model TreatmentMedicine
 * 
 */
export type TreatmentMedicine = $Result.DefaultSelection<Prisma.$TreatmentMedicinePayload>
/**
 * Model Medicine
 * ------------- Medicine -------------
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
/**
 * Model TerapeuticCategory
 * 
 */
export type TerapeuticCategory = $Result.DefaultSelection<Prisma.$TerapeuticCategoryPayload>
/**
 * Model PharmaceuticalForm
 * 
 */
export type PharmaceuticalForm = $Result.DefaultSelection<Prisma.$PharmaceuticalFormPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BloodType: {
  A_POS: 'A_POS',
  A_NEG: 'A_NEG',
  B_POS: 'B_POS',
  B_NEG: 'B_NEG',
  AB_POS: 'AB_POS',
  AB_NEG: 'AB_NEG',
  O_POS: 'O_POS',
  O_NEG: 'O_NEG'
};

export type BloodType = (typeof BloodType)[keyof typeof BloodType]


export const RoomState: {
  OCCUPIED: 'OCCUPIED',
  FREE: 'FREE',
  MAINTENANCE: 'MAINTENANCE'
};

export type RoomState = (typeof RoomState)[keyof typeof RoomState]


export const RoomType: {
  SINGLE: 'SINGLE',
  DOUBLE: 'DOUBLE'
};

export type RoomType = (typeof RoomType)[keyof typeof RoomType]


export const AppointmentState: {
  PENDING: 'PENDING',
  MADE: 'MADE',
  CANCELED: 'CANCELED'
};

export type AppointmentState = (typeof AppointmentState)[keyof typeof AppointmentState]


export const TimeUnit: {
  MINUTE: 'MINUTE',
  HOUR: 'HOUR',
  DAY: 'DAY',
  MONTH: 'MONTH',
  YEAR: 'YEAR'
};

export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit]

}

export type BloodType = $Enums.BloodType

export const BloodType: typeof $Enums.BloodType

export type RoomState = $Enums.RoomState

export const RoomState: typeof $Enums.RoomState

export type RoomType = $Enums.RoomType

export const RoomType: typeof $Enums.RoomType

export type AppointmentState = $Enums.AppointmentState

export const AppointmentState: typeof $Enums.AppointmentState

export type TimeUnit = $Enums.TimeUnit

export const TimeUnit: typeof $Enums.TimeUnit

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Patients
 * const patients = await prisma.patient.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Patients
   * const patients = await prisma.patient.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientAllergy`: Exposes CRUD operations for the **PatientAllergy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientAllergies
    * const patientAllergies = await prisma.patientAllergy.findMany()
    * ```
    */
  get patientAllergy(): Prisma.PatientAllergyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allergy`: Exposes CRUD operations for the **Allergy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allergies
    * const allergies = await prisma.allergy.findMany()
    * ```
    */
  get allergy(): Prisma.AllergyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospitalization`: Exposes CRUD operations for the **Hospitalization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospitalizations
    * const hospitalizations = await prisma.hospitalization.findMany()
    * ```
    */
  get hospitalization(): Prisma.HospitalizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorSpeciality`: Exposes CRUD operations for the **DoctorSpeciality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSpecialities
    * const doctorSpecialities = await prisma.doctorSpeciality.findMany()
    * ```
    */
  get doctorSpeciality(): Prisma.DoctorSpecialityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.speciality`: Exposes CRUD operations for the **Speciality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialities
    * const specialities = await prisma.speciality.findMany()
    * ```
    */
  get speciality(): Prisma.SpecialityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consult`: Exposes CRUD operations for the **Consult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consults
    * const consults = await prisma.consult.findMany()
    * ```
    */
  get consult(): Prisma.ConsultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatment`: Exposes CRUD operations for the **Treatment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Treatments
    * const treatments = await prisma.treatment.findMany()
    * ```
    */
  get treatment(): Prisma.TreatmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatmentMedicine`: Exposes CRUD operations for the **TreatmentMedicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreatmentMedicines
    * const treatmentMedicines = await prisma.treatmentMedicine.findMany()
    * ```
    */
  get treatmentMedicine(): Prisma.TreatmentMedicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.terapeuticCategory`: Exposes CRUD operations for the **TerapeuticCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TerapeuticCategories
    * const terapeuticCategories = await prisma.terapeuticCategory.findMany()
    * ```
    */
  get terapeuticCategory(): Prisma.TerapeuticCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmaceuticalForm`: Exposes CRUD operations for the **PharmaceuticalForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PharmaceuticalForms
    * const pharmaceuticalForms = await prisma.pharmaceuticalForm.findMany()
    * ```
    */
  get pharmaceuticalForm(): Prisma.PharmaceuticalFormDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Patient: 'Patient',
    PatientAllergy: 'PatientAllergy',
    Allergy: 'Allergy',
    Hospitalization: 'Hospitalization',
    Room: 'Room',
    Doctor: 'Doctor',
    DoctorSpeciality: 'DoctorSpeciality',
    Speciality: 'Speciality',
    Appointment: 'Appointment',
    Consult: 'Consult',
    Treatment: 'Treatment',
    TreatmentMedicine: 'TreatmentMedicine',
    Medicine: 'Medicine',
    TerapeuticCategory: 'TerapeuticCategory',
    PharmaceuticalForm: 'PharmaceuticalForm'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "patient" | "patientAllergy" | "allergy" | "hospitalization" | "room" | "doctor" | "doctorSpeciality" | "speciality" | "appointment" | "consult" | "treatment" | "treatmentMedicine" | "medicine" | "terapeuticCategory" | "pharmaceuticalForm"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      PatientAllergy: {
        payload: Prisma.$PatientAllergyPayload<ExtArgs>
        fields: Prisma.PatientAllergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientAllergyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientAllergyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload>
          }
          findFirst: {
            args: Prisma.PatientAllergyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientAllergyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload>
          }
          findMany: {
            args: Prisma.PatientAllergyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload>[]
          }
          create: {
            args: Prisma.PatientAllergyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload>
          }
          createMany: {
            args: Prisma.PatientAllergyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientAllergyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload>[]
          }
          delete: {
            args: Prisma.PatientAllergyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload>
          }
          update: {
            args: Prisma.PatientAllergyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload>
          }
          deleteMany: {
            args: Prisma.PatientAllergyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientAllergyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientAllergyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload>[]
          }
          upsert: {
            args: Prisma.PatientAllergyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientAllergyPayload>
          }
          aggregate: {
            args: Prisma.PatientAllergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientAllergy>
          }
          groupBy: {
            args: Prisma.PatientAllergyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientAllergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientAllergyCountArgs<ExtArgs>
            result: $Utils.Optional<PatientAllergyCountAggregateOutputType> | number
          }
        }
      }
      Allergy: {
        payload: Prisma.$AllergyPayload<ExtArgs>
        fields: Prisma.AllergyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllergyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllergyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          findFirst: {
            args: Prisma.AllergyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllergyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          findMany: {
            args: Prisma.AllergyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>[]
          }
          create: {
            args: Prisma.AllergyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          createMany: {
            args: Prisma.AllergyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllergyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>[]
          }
          delete: {
            args: Prisma.AllergyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          update: {
            args: Prisma.AllergyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          deleteMany: {
            args: Prisma.AllergyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllergyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllergyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>[]
          }
          upsert: {
            args: Prisma.AllergyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllergyPayload>
          }
          aggregate: {
            args: Prisma.AllergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllergy>
          }
          groupBy: {
            args: Prisma.AllergyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllergyCountArgs<ExtArgs>
            result: $Utils.Optional<AllergyCountAggregateOutputType> | number
          }
        }
      }
      Hospitalization: {
        payload: Prisma.$HospitalizationPayload<ExtArgs>
        fields: Prisma.HospitalizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospitalizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospitalizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload>
          }
          findFirst: {
            args: Prisma.HospitalizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospitalizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload>
          }
          findMany: {
            args: Prisma.HospitalizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload>[]
          }
          create: {
            args: Prisma.HospitalizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload>
          }
          createMany: {
            args: Prisma.HospitalizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospitalizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload>[]
          }
          delete: {
            args: Prisma.HospitalizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload>
          }
          update: {
            args: Prisma.HospitalizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload>
          }
          deleteMany: {
            args: Prisma.HospitalizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospitalizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospitalizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload>[]
          }
          upsert: {
            args: Prisma.HospitalizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospitalizationPayload>
          }
          aggregate: {
            args: Prisma.HospitalizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospitalization>
          }
          groupBy: {
            args: Prisma.HospitalizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospitalizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospitalizationCountArgs<ExtArgs>
            result: $Utils.Optional<HospitalizationCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      DoctorSpeciality: {
        payload: Prisma.$DoctorSpecialityPayload<ExtArgs>
        fields: Prisma.DoctorSpecialityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorSpecialityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorSpecialityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload>
          }
          findFirst: {
            args: Prisma.DoctorSpecialityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorSpecialityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload>
          }
          findMany: {
            args: Prisma.DoctorSpecialityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload>[]
          }
          create: {
            args: Prisma.DoctorSpecialityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload>
          }
          createMany: {
            args: Prisma.DoctorSpecialityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorSpecialityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload>[]
          }
          delete: {
            args: Prisma.DoctorSpecialityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload>
          }
          update: {
            args: Prisma.DoctorSpecialityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload>
          }
          deleteMany: {
            args: Prisma.DoctorSpecialityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorSpecialityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorSpecialityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload>[]
          }
          upsert: {
            args: Prisma.DoctorSpecialityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialityPayload>
          }
          aggregate: {
            args: Prisma.DoctorSpecialityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSpeciality>
          }
          groupBy: {
            args: Prisma.DoctorSpecialityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecialityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorSpecialityCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecialityCountAggregateOutputType> | number
          }
        }
      }
      Speciality: {
        payload: Prisma.$SpecialityPayload<ExtArgs>
        fields: Prisma.SpecialityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          findFirst: {
            args: Prisma.SpecialityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          findMany: {
            args: Prisma.SpecialityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>[]
          }
          create: {
            args: Prisma.SpecialityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          createMany: {
            args: Prisma.SpecialityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>[]
          }
          delete: {
            args: Prisma.SpecialityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          update: {
            args: Prisma.SpecialityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          deleteMany: {
            args: Prisma.SpecialityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>[]
          }
          upsert: {
            args: Prisma.SpecialityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityPayload>
          }
          aggregate: {
            args: Prisma.SpecialityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeciality>
          }
          groupBy: {
            args: Prisma.SpecialityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialityCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialityCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Consult: {
        payload: Prisma.$ConsultPayload<ExtArgs>
        fields: Prisma.ConsultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          findFirst: {
            args: Prisma.ConsultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          findMany: {
            args: Prisma.ConsultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>[]
          }
          create: {
            args: Prisma.ConsultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          createMany: {
            args: Prisma.ConsultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>[]
          }
          delete: {
            args: Prisma.ConsultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          update: {
            args: Prisma.ConsultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          deleteMany: {
            args: Prisma.ConsultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>[]
          }
          upsert: {
            args: Prisma.ConsultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultPayload>
          }
          aggregate: {
            args: Prisma.ConsultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsult>
          }
          groupBy: {
            args: Prisma.ConsultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultCountAggregateOutputType> | number
          }
        }
      }
      Treatment: {
        payload: Prisma.$TreatmentPayload<ExtArgs>
        fields: Prisma.TreatmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          findFirst: {
            args: Prisma.TreatmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          findMany: {
            args: Prisma.TreatmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>[]
          }
          create: {
            args: Prisma.TreatmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          createMany: {
            args: Prisma.TreatmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreatmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>[]
          }
          delete: {
            args: Prisma.TreatmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          update: {
            args: Prisma.TreatmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          deleteMany: {
            args: Prisma.TreatmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreatmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>[]
          }
          upsert: {
            args: Prisma.TreatmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          aggregate: {
            args: Prisma.TreatmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatment>
          }
          groupBy: {
            args: Prisma.TreatmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentCountAggregateOutputType> | number
          }
        }
      }
      TreatmentMedicine: {
        payload: Prisma.$TreatmentMedicinePayload<ExtArgs>
        fields: Prisma.TreatmentMedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentMedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentMedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload>
          }
          findFirst: {
            args: Prisma.TreatmentMedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentMedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload>
          }
          findMany: {
            args: Prisma.TreatmentMedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload>[]
          }
          create: {
            args: Prisma.TreatmentMedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload>
          }
          createMany: {
            args: Prisma.TreatmentMedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreatmentMedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload>[]
          }
          delete: {
            args: Prisma.TreatmentMedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload>
          }
          update: {
            args: Prisma.TreatmentMedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload>
          }
          deleteMany: {
            args: Prisma.TreatmentMedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentMedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreatmentMedicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload>[]
          }
          upsert: {
            args: Prisma.TreatmentMedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentMedicinePayload>
          }
          aggregate: {
            args: Prisma.TreatmentMedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatmentMedicine>
          }
          groupBy: {
            args: Prisma.TreatmentMedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentMedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentMedicineCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentMedicineCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      TerapeuticCategory: {
        payload: Prisma.$TerapeuticCategoryPayload<ExtArgs>
        fields: Prisma.TerapeuticCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TerapeuticCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TerapeuticCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload>
          }
          findFirst: {
            args: Prisma.TerapeuticCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TerapeuticCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload>
          }
          findMany: {
            args: Prisma.TerapeuticCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload>[]
          }
          create: {
            args: Prisma.TerapeuticCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload>
          }
          createMany: {
            args: Prisma.TerapeuticCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TerapeuticCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload>[]
          }
          delete: {
            args: Prisma.TerapeuticCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload>
          }
          update: {
            args: Prisma.TerapeuticCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TerapeuticCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TerapeuticCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TerapeuticCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload>[]
          }
          upsert: {
            args: Prisma.TerapeuticCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TerapeuticCategoryPayload>
          }
          aggregate: {
            args: Prisma.TerapeuticCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTerapeuticCategory>
          }
          groupBy: {
            args: Prisma.TerapeuticCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TerapeuticCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TerapeuticCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TerapeuticCategoryCountAggregateOutputType> | number
          }
        }
      }
      PharmaceuticalForm: {
        payload: Prisma.$PharmaceuticalFormPayload<ExtArgs>
        fields: Prisma.PharmaceuticalFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmaceuticalFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmaceuticalFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          findFirst: {
            args: Prisma.PharmaceuticalFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmaceuticalFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          findMany: {
            args: Prisma.PharmaceuticalFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>[]
          }
          create: {
            args: Prisma.PharmaceuticalFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          createMany: {
            args: Prisma.PharmaceuticalFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmaceuticalFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>[]
          }
          delete: {
            args: Prisma.PharmaceuticalFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          update: {
            args: Prisma.PharmaceuticalFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          deleteMany: {
            args: Prisma.PharmaceuticalFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmaceuticalFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmaceuticalFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>[]
          }
          upsert: {
            args: Prisma.PharmaceuticalFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          aggregate: {
            args: Prisma.PharmaceuticalFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmaceuticalForm>
          }
          groupBy: {
            args: Prisma.PharmaceuticalFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmaceuticalFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmaceuticalFormCountArgs<ExtArgs>
            result: $Utils.Optional<PharmaceuticalFormCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    patient?: PatientOmit
    patientAllergy?: PatientAllergyOmit
    allergy?: AllergyOmit
    hospitalization?: HospitalizationOmit
    room?: RoomOmit
    doctor?: DoctorOmit
    doctorSpeciality?: DoctorSpecialityOmit
    speciality?: SpecialityOmit
    appointment?: AppointmentOmit
    consult?: ConsultOmit
    treatment?: TreatmentOmit
    treatmentMedicine?: TreatmentMedicineOmit
    medicine?: MedicineOmit
    terapeuticCategory?: TerapeuticCategoryOmit
    pharmaceuticalForm?: PharmaceuticalFormOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    allergy: number
    hospitalizations: number
    appointments: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allergy?: boolean | PatientCountOutputTypeCountAllergyArgs
    hospitalizations?: boolean | PatientCountOutputTypeCountHospitalizationsArgs
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAllergyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientAllergyWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountHospitalizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalizationWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type AllergyCountOutputType
   */

  export type AllergyCountOutputType = {
    patientAllergies: number
  }

  export type AllergyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patientAllergies?: boolean | AllergyCountOutputTypeCountPatientAllergiesArgs
  }

  // Custom InputTypes
  /**
   * AllergyCountOutputType without action
   */
  export type AllergyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllergyCountOutputType
     */
    select?: AllergyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AllergyCountOutputType without action
   */
  export type AllergyCountOutputTypeCountPatientAllergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientAllergyWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    hospitalizations: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitalizations?: boolean | RoomCountOutputTypeCountHospitalizationsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountHospitalizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalizationWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    doctorSpeciality: number
    appointments: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpeciality?: boolean | DoctorCountOutputTypeCountDoctorSpecialityArgs
    appointments?: boolean | DoctorCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountDoctorSpecialityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecialityWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type SpecialityCountOutputType
   */

  export type SpecialityCountOutputType = {
    doctorSpecialities: number
  }

  export type SpecialityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialities?: boolean | SpecialityCountOutputTypeCountDoctorSpecialitiesArgs
  }

  // Custom InputTypes
  /**
   * SpecialityCountOutputType without action
   */
  export type SpecialityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityCountOutputType
     */
    select?: SpecialityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialityCountOutputType without action
   */
  export type SpecialityCountOutputTypeCountDoctorSpecialitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecialityWhereInput
  }


  /**
   * Count Type TreatmentCountOutputType
   */

  export type TreatmentCountOutputType = {
    treatmentMedicine: number
  }

  export type TreatmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatmentMedicine?: boolean | TreatmentCountOutputTypeCountTreatmentMedicineArgs
  }

  // Custom InputTypes
  /**
   * TreatmentCountOutputType without action
   */
  export type TreatmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCountOutputType
     */
    select?: TreatmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreatmentCountOutputType without action
   */
  export type TreatmentCountOutputTypeCountTreatmentMedicineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentMedicineWhereInput
  }


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    treatmentMedicine: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatmentMedicine?: boolean | MedicineCountOutputTypeCountTreatmentMedicineArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountTreatmentMedicineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentMedicineWhereInput
  }


  /**
   * Count Type TerapeuticCategoryCountOutputType
   */

  export type TerapeuticCategoryCountOutputType = {
    medicines: number
  }

  export type TerapeuticCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | TerapeuticCategoryCountOutputTypeCountMedicinesArgs
  }

  // Custom InputTypes
  /**
   * TerapeuticCategoryCountOutputType without action
   */
  export type TerapeuticCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategoryCountOutputType
     */
    select?: TerapeuticCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TerapeuticCategoryCountOutputType without action
   */
  export type TerapeuticCategoryCountOutputTypeCountMedicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
  }


  /**
   * Count Type PharmaceuticalFormCountOutputType
   */

  export type PharmaceuticalFormCountOutputType = {
    medicines: number
  }

  export type PharmaceuticalFormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | PharmaceuticalFormCountOutputTypeCountMedicinesArgs
  }

  // Custom InputTypes
  /**
   * PharmaceuticalFormCountOutputType without action
   */
  export type PharmaceuticalFormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalFormCountOutputType
     */
    select?: PharmaceuticalFormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PharmaceuticalFormCountOutputType without action
   */
  export type PharmaceuticalFormCountOutputTypeCountMedicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    insurance_num: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
    insurance_num: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    insurance_num: number | null
    name: string | null
    paternalSurname: string | null
    maternalSurname: string | null
    dateOfBirth: Date | null
    address: string | null
    phone: string | null
    email: string | null
    bloodType: $Enums.BloodType | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    insurance_num: number | null
    name: string | null
    paternalSurname: string | null
    maternalSurname: string | null
    dateOfBirth: Date | null
    address: string | null
    phone: string | null
    email: string | null
    bloodType: $Enums.BloodType | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    insurance_num: number
    name: number
    paternalSurname: number
    maternalSurname: number
    dateOfBirth: number
    address: number
    phone: number
    email: number
    bloodType: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    insurance_num?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    insurance_num?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    insurance_num?: true
    name?: true
    paternalSurname?: true
    maternalSurname?: true
    dateOfBirth?: true
    address?: true
    phone?: true
    email?: true
    bloodType?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    insurance_num?: true
    name?: true
    paternalSurname?: true
    maternalSurname?: true
    dateOfBirth?: true
    address?: true
    phone?: true
    email?: true
    bloodType?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    insurance_num?: true
    name?: true
    paternalSurname?: true
    maternalSurname?: true
    dateOfBirth?: true
    address?: true
    phone?: true
    email?: true
    bloodType?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    insurance_num: number
    name: string
    paternalSurname: string
    maternalSurname: string
    dateOfBirth: Date
    address: string
    phone: string
    email: string
    bloodType: $Enums.BloodType
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insurance_num?: boolean
    name?: boolean
    paternalSurname?: boolean
    maternalSurname?: boolean
    dateOfBirth?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    bloodType?: boolean
    allergy?: boolean | Patient$allergyArgs<ExtArgs>
    hospitalizations?: boolean | Patient$hospitalizationsArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insurance_num?: boolean
    name?: boolean
    paternalSurname?: boolean
    maternalSurname?: boolean
    dateOfBirth?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    bloodType?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    insurance_num?: boolean
    name?: boolean
    paternalSurname?: boolean
    maternalSurname?: boolean
    dateOfBirth?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    bloodType?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    insurance_num?: boolean
    name?: boolean
    paternalSurname?: boolean
    maternalSurname?: boolean
    dateOfBirth?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    bloodType?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "insurance_num" | "name" | "paternalSurname" | "maternalSurname" | "dateOfBirth" | "address" | "phone" | "email" | "bloodType", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allergy?: boolean | Patient$allergyArgs<ExtArgs>
    hospitalizations?: boolean | Patient$hospitalizationsArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      allergy: Prisma.$PatientAllergyPayload<ExtArgs>[]
      hospitalizations: Prisma.$HospitalizationPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      insurance_num: number
      name: string
      paternalSurname: string
      maternalSurname: string
      dateOfBirth: Date
      address: string
      phone: string
      email: string
      bloodType: $Enums.BloodType
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    allergy<T extends Patient$allergyArgs<ExtArgs> = {}>(args?: Subset<T, Patient$allergyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hospitalizations<T extends Patient$hospitalizationsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$hospitalizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly insurance_num: FieldRef<"Patient", 'Int'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly paternalSurname: FieldRef<"Patient", 'String'>
    readonly maternalSurname: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly phone: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly bloodType: FieldRef<"Patient", 'BloodType'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.allergy
   */
  export type Patient$allergyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    where?: PatientAllergyWhereInput
    orderBy?: PatientAllergyOrderByWithRelationInput | PatientAllergyOrderByWithRelationInput[]
    cursor?: PatientAllergyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientAllergyScalarFieldEnum | PatientAllergyScalarFieldEnum[]
  }

  /**
   * Patient.hospitalizations
   */
  export type Patient$hospitalizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    where?: HospitalizationWhereInput
    orderBy?: HospitalizationOrderByWithRelationInput | HospitalizationOrderByWithRelationInput[]
    cursor?: HospitalizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HospitalizationScalarFieldEnum | HospitalizationScalarFieldEnum[]
  }

  /**
   * Patient.appointments
   */
  export type Patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model PatientAllergy
   */

  export type AggregatePatientAllergy = {
    _count: PatientAllergyCountAggregateOutputType | null
    _avg: PatientAllergyAvgAggregateOutputType | null
    _sum: PatientAllergySumAggregateOutputType | null
    _min: PatientAllergyMinAggregateOutputType | null
    _max: PatientAllergyMaxAggregateOutputType | null
  }

  export type PatientAllergyAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    allergyId: number | null
  }

  export type PatientAllergySumAggregateOutputType = {
    id: number | null
    patientId: number | null
    allergyId: number | null
  }

  export type PatientAllergyMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    allergyId: number | null
  }

  export type PatientAllergyMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    allergyId: number | null
  }

  export type PatientAllergyCountAggregateOutputType = {
    id: number
    patientId: number
    allergyId: number
    _all: number
  }


  export type PatientAllergyAvgAggregateInputType = {
    id?: true
    patientId?: true
    allergyId?: true
  }

  export type PatientAllergySumAggregateInputType = {
    id?: true
    patientId?: true
    allergyId?: true
  }

  export type PatientAllergyMinAggregateInputType = {
    id?: true
    patientId?: true
    allergyId?: true
  }

  export type PatientAllergyMaxAggregateInputType = {
    id?: true
    patientId?: true
    allergyId?: true
  }

  export type PatientAllergyCountAggregateInputType = {
    id?: true
    patientId?: true
    allergyId?: true
    _all?: true
  }

  export type PatientAllergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientAllergy to aggregate.
     */
    where?: PatientAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientAllergies to fetch.
     */
    orderBy?: PatientAllergyOrderByWithRelationInput | PatientAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientAllergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientAllergies
    **/
    _count?: true | PatientAllergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAllergyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientAllergySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientAllergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientAllergyMaxAggregateInputType
  }

  export type GetPatientAllergyAggregateType<T extends PatientAllergyAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientAllergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientAllergy[P]>
      : GetScalarType<T[P], AggregatePatientAllergy[P]>
  }




  export type PatientAllergyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientAllergyWhereInput
    orderBy?: PatientAllergyOrderByWithAggregationInput | PatientAllergyOrderByWithAggregationInput[]
    by: PatientAllergyScalarFieldEnum[] | PatientAllergyScalarFieldEnum
    having?: PatientAllergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientAllergyCountAggregateInputType | true
    _avg?: PatientAllergyAvgAggregateInputType
    _sum?: PatientAllergySumAggregateInputType
    _min?: PatientAllergyMinAggregateInputType
    _max?: PatientAllergyMaxAggregateInputType
  }

  export type PatientAllergyGroupByOutputType = {
    id: number
    patientId: number
    allergyId: number
    _count: PatientAllergyCountAggregateOutputType | null
    _avg: PatientAllergyAvgAggregateOutputType | null
    _sum: PatientAllergySumAggregateOutputType | null
    _min: PatientAllergyMinAggregateOutputType | null
    _max: PatientAllergyMaxAggregateOutputType | null
  }

  type GetPatientAllergyGroupByPayload<T extends PatientAllergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientAllergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientAllergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientAllergyGroupByOutputType[P]>
            : GetScalarType<T[P], PatientAllergyGroupByOutputType[P]>
        }
      >
    >


  export type PatientAllergySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    allergyId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientAllergy"]>

  export type PatientAllergySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    allergyId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientAllergy"]>

  export type PatientAllergySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    allergyId?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientAllergy"]>

  export type PatientAllergySelectScalar = {
    id?: boolean
    patientId?: boolean
    allergyId?: boolean
  }

  export type PatientAllergyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "allergyId", ExtArgs["result"]["patientAllergy"]>
  export type PatientAllergyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }
  export type PatientAllergyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }
  export type PatientAllergyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    allergy?: boolean | AllergyDefaultArgs<ExtArgs>
  }

  export type $PatientAllergyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientAllergy"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      allergy: Prisma.$AllergyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      allergyId: number
    }, ExtArgs["result"]["patientAllergy"]>
    composites: {}
  }

  type PatientAllergyGetPayload<S extends boolean | null | undefined | PatientAllergyDefaultArgs> = $Result.GetResult<Prisma.$PatientAllergyPayload, S>

  type PatientAllergyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientAllergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientAllergyCountAggregateInputType | true
    }

  export interface PatientAllergyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientAllergy'], meta: { name: 'PatientAllergy' } }
    /**
     * Find zero or one PatientAllergy that matches the filter.
     * @param {PatientAllergyFindUniqueArgs} args - Arguments to find a PatientAllergy
     * @example
     * // Get one PatientAllergy
     * const patientAllergy = await prisma.patientAllergy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientAllergyFindUniqueArgs>(args: SelectSubset<T, PatientAllergyFindUniqueArgs<ExtArgs>>): Prisma__PatientAllergyClient<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientAllergy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientAllergyFindUniqueOrThrowArgs} args - Arguments to find a PatientAllergy
     * @example
     * // Get one PatientAllergy
     * const patientAllergy = await prisma.patientAllergy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientAllergyFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientAllergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientAllergyClient<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientAllergy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAllergyFindFirstArgs} args - Arguments to find a PatientAllergy
     * @example
     * // Get one PatientAllergy
     * const patientAllergy = await prisma.patientAllergy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientAllergyFindFirstArgs>(args?: SelectSubset<T, PatientAllergyFindFirstArgs<ExtArgs>>): Prisma__PatientAllergyClient<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientAllergy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAllergyFindFirstOrThrowArgs} args - Arguments to find a PatientAllergy
     * @example
     * // Get one PatientAllergy
     * const patientAllergy = await prisma.patientAllergy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientAllergyFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientAllergyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientAllergyClient<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientAllergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAllergyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientAllergies
     * const patientAllergies = await prisma.patientAllergy.findMany()
     * 
     * // Get first 10 PatientAllergies
     * const patientAllergies = await prisma.patientAllergy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientAllergyWithIdOnly = await prisma.patientAllergy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientAllergyFindManyArgs>(args?: SelectSubset<T, PatientAllergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientAllergy.
     * @param {PatientAllergyCreateArgs} args - Arguments to create a PatientAllergy.
     * @example
     * // Create one PatientAllergy
     * const PatientAllergy = await prisma.patientAllergy.create({
     *   data: {
     *     // ... data to create a PatientAllergy
     *   }
     * })
     * 
     */
    create<T extends PatientAllergyCreateArgs>(args: SelectSubset<T, PatientAllergyCreateArgs<ExtArgs>>): Prisma__PatientAllergyClient<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientAllergies.
     * @param {PatientAllergyCreateManyArgs} args - Arguments to create many PatientAllergies.
     * @example
     * // Create many PatientAllergies
     * const patientAllergy = await prisma.patientAllergy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientAllergyCreateManyArgs>(args?: SelectSubset<T, PatientAllergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientAllergies and returns the data saved in the database.
     * @param {PatientAllergyCreateManyAndReturnArgs} args - Arguments to create many PatientAllergies.
     * @example
     * // Create many PatientAllergies
     * const patientAllergy = await prisma.patientAllergy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientAllergies and only return the `id`
     * const patientAllergyWithIdOnly = await prisma.patientAllergy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientAllergyCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientAllergyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientAllergy.
     * @param {PatientAllergyDeleteArgs} args - Arguments to delete one PatientAllergy.
     * @example
     * // Delete one PatientAllergy
     * const PatientAllergy = await prisma.patientAllergy.delete({
     *   where: {
     *     // ... filter to delete one PatientAllergy
     *   }
     * })
     * 
     */
    delete<T extends PatientAllergyDeleteArgs>(args: SelectSubset<T, PatientAllergyDeleteArgs<ExtArgs>>): Prisma__PatientAllergyClient<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientAllergy.
     * @param {PatientAllergyUpdateArgs} args - Arguments to update one PatientAllergy.
     * @example
     * // Update one PatientAllergy
     * const patientAllergy = await prisma.patientAllergy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientAllergyUpdateArgs>(args: SelectSubset<T, PatientAllergyUpdateArgs<ExtArgs>>): Prisma__PatientAllergyClient<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientAllergies.
     * @param {PatientAllergyDeleteManyArgs} args - Arguments to filter PatientAllergies to delete.
     * @example
     * // Delete a few PatientAllergies
     * const { count } = await prisma.patientAllergy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientAllergyDeleteManyArgs>(args?: SelectSubset<T, PatientAllergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientAllergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAllergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientAllergies
     * const patientAllergy = await prisma.patientAllergy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientAllergyUpdateManyArgs>(args: SelectSubset<T, PatientAllergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientAllergies and returns the data updated in the database.
     * @param {PatientAllergyUpdateManyAndReturnArgs} args - Arguments to update many PatientAllergies.
     * @example
     * // Update many PatientAllergies
     * const patientAllergy = await prisma.patientAllergy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientAllergies and only return the `id`
     * const patientAllergyWithIdOnly = await prisma.patientAllergy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientAllergyUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientAllergyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientAllergy.
     * @param {PatientAllergyUpsertArgs} args - Arguments to update or create a PatientAllergy.
     * @example
     * // Update or create a PatientAllergy
     * const patientAllergy = await prisma.patientAllergy.upsert({
     *   create: {
     *     // ... data to create a PatientAllergy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientAllergy we want to update
     *   }
     * })
     */
    upsert<T extends PatientAllergyUpsertArgs>(args: SelectSubset<T, PatientAllergyUpsertArgs<ExtArgs>>): Prisma__PatientAllergyClient<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientAllergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAllergyCountArgs} args - Arguments to filter PatientAllergies to count.
     * @example
     * // Count the number of PatientAllergies
     * const count = await prisma.patientAllergy.count({
     *   where: {
     *     // ... the filter for the PatientAllergies we want to count
     *   }
     * })
    **/
    count<T extends PatientAllergyCountArgs>(
      args?: Subset<T, PatientAllergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientAllergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientAllergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAllergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAllergyAggregateArgs>(args: Subset<T, PatientAllergyAggregateArgs>): Prisma.PrismaPromise<GetPatientAllergyAggregateType<T>>

    /**
     * Group by PatientAllergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAllergyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientAllergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientAllergyGroupByArgs['orderBy'] }
        : { orderBy?: PatientAllergyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientAllergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientAllergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientAllergy model
   */
  readonly fields: PatientAllergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientAllergy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientAllergyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    allergy<T extends AllergyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AllergyDefaultArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientAllergy model
   */
  interface PatientAllergyFieldRefs {
    readonly id: FieldRef<"PatientAllergy", 'Int'>
    readonly patientId: FieldRef<"PatientAllergy", 'Int'>
    readonly allergyId: FieldRef<"PatientAllergy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PatientAllergy findUnique
   */
  export type PatientAllergyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    /**
     * Filter, which PatientAllergy to fetch.
     */
    where: PatientAllergyWhereUniqueInput
  }

  /**
   * PatientAllergy findUniqueOrThrow
   */
  export type PatientAllergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    /**
     * Filter, which PatientAllergy to fetch.
     */
    where: PatientAllergyWhereUniqueInput
  }

  /**
   * PatientAllergy findFirst
   */
  export type PatientAllergyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    /**
     * Filter, which PatientAllergy to fetch.
     */
    where?: PatientAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientAllergies to fetch.
     */
    orderBy?: PatientAllergyOrderByWithRelationInput | PatientAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientAllergies.
     */
    cursor?: PatientAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientAllergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientAllergies.
     */
    distinct?: PatientAllergyScalarFieldEnum | PatientAllergyScalarFieldEnum[]
  }

  /**
   * PatientAllergy findFirstOrThrow
   */
  export type PatientAllergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    /**
     * Filter, which PatientAllergy to fetch.
     */
    where?: PatientAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientAllergies to fetch.
     */
    orderBy?: PatientAllergyOrderByWithRelationInput | PatientAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientAllergies.
     */
    cursor?: PatientAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientAllergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientAllergies.
     */
    distinct?: PatientAllergyScalarFieldEnum | PatientAllergyScalarFieldEnum[]
  }

  /**
   * PatientAllergy findMany
   */
  export type PatientAllergyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    /**
     * Filter, which PatientAllergies to fetch.
     */
    where?: PatientAllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientAllergies to fetch.
     */
    orderBy?: PatientAllergyOrderByWithRelationInput | PatientAllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientAllergies.
     */
    cursor?: PatientAllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientAllergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientAllergies.
     */
    skip?: number
    distinct?: PatientAllergyScalarFieldEnum | PatientAllergyScalarFieldEnum[]
  }

  /**
   * PatientAllergy create
   */
  export type PatientAllergyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientAllergy.
     */
    data: XOR<PatientAllergyCreateInput, PatientAllergyUncheckedCreateInput>
  }

  /**
   * PatientAllergy createMany
   */
  export type PatientAllergyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientAllergies.
     */
    data: PatientAllergyCreateManyInput | PatientAllergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientAllergy createManyAndReturn
   */
  export type PatientAllergyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * The data used to create many PatientAllergies.
     */
    data: PatientAllergyCreateManyInput | PatientAllergyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientAllergy update
   */
  export type PatientAllergyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientAllergy.
     */
    data: XOR<PatientAllergyUpdateInput, PatientAllergyUncheckedUpdateInput>
    /**
     * Choose, which PatientAllergy to update.
     */
    where: PatientAllergyWhereUniqueInput
  }

  /**
   * PatientAllergy updateMany
   */
  export type PatientAllergyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientAllergies.
     */
    data: XOR<PatientAllergyUpdateManyMutationInput, PatientAllergyUncheckedUpdateManyInput>
    /**
     * Filter which PatientAllergies to update
     */
    where?: PatientAllergyWhereInput
    /**
     * Limit how many PatientAllergies to update.
     */
    limit?: number
  }

  /**
   * PatientAllergy updateManyAndReturn
   */
  export type PatientAllergyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * The data used to update PatientAllergies.
     */
    data: XOR<PatientAllergyUpdateManyMutationInput, PatientAllergyUncheckedUpdateManyInput>
    /**
     * Filter which PatientAllergies to update
     */
    where?: PatientAllergyWhereInput
    /**
     * Limit how many PatientAllergies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientAllergy upsert
   */
  export type PatientAllergyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientAllergy to update in case it exists.
     */
    where: PatientAllergyWhereUniqueInput
    /**
     * In case the PatientAllergy found by the `where` argument doesn't exist, create a new PatientAllergy with this data.
     */
    create: XOR<PatientAllergyCreateInput, PatientAllergyUncheckedCreateInput>
    /**
     * In case the PatientAllergy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientAllergyUpdateInput, PatientAllergyUncheckedUpdateInput>
  }

  /**
   * PatientAllergy delete
   */
  export type PatientAllergyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    /**
     * Filter which PatientAllergy to delete.
     */
    where: PatientAllergyWhereUniqueInput
  }

  /**
   * PatientAllergy deleteMany
   */
  export type PatientAllergyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientAllergies to delete
     */
    where?: PatientAllergyWhereInput
    /**
     * Limit how many PatientAllergies to delete.
     */
    limit?: number
  }

  /**
   * PatientAllergy without action
   */
  export type PatientAllergyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
  }


  /**
   * Model Allergy
   */

  export type AggregateAllergy = {
    _count: AllergyCountAggregateOutputType | null
    _avg: AllergyAvgAggregateOutputType | null
    _sum: AllergySumAggregateOutputType | null
    _min: AllergyMinAggregateOutputType | null
    _max: AllergyMaxAggregateOutputType | null
  }

  export type AllergyAvgAggregateOutputType = {
    id: number | null
  }

  export type AllergySumAggregateOutputType = {
    id: number | null
  }

  export type AllergyMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AllergyMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AllergyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AllergyAvgAggregateInputType = {
    id?: true
  }

  export type AllergySumAggregateInputType = {
    id?: true
  }

  export type AllergyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AllergyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AllergyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AllergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allergy to aggregate.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Allergies
    **/
    _count?: true | AllergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllergyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllergySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllergyMaxAggregateInputType
  }

  export type GetAllergyAggregateType<T extends AllergyAggregateArgs> = {
        [P in keyof T & keyof AggregateAllergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllergy[P]>
      : GetScalarType<T[P], AggregateAllergy[P]>
  }




  export type AllergyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllergyWhereInput
    orderBy?: AllergyOrderByWithAggregationInput | AllergyOrderByWithAggregationInput[]
    by: AllergyScalarFieldEnum[] | AllergyScalarFieldEnum
    having?: AllergyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllergyCountAggregateInputType | true
    _avg?: AllergyAvgAggregateInputType
    _sum?: AllergySumAggregateInputType
    _min?: AllergyMinAggregateInputType
    _max?: AllergyMaxAggregateInputType
  }

  export type AllergyGroupByOutputType = {
    id: number
    name: string
    _count: AllergyCountAggregateOutputType | null
    _avg: AllergyAvgAggregateOutputType | null
    _sum: AllergySumAggregateOutputType | null
    _min: AllergyMinAggregateOutputType | null
    _max: AllergyMaxAggregateOutputType | null
  }

  type GetAllergyGroupByPayload<T extends AllergyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllergyGroupByOutputType[P]>
            : GetScalarType<T[P], AllergyGroupByOutputType[P]>
        }
      >
    >


  export type AllergySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    patientAllergies?: boolean | Allergy$patientAllergiesArgs<ExtArgs>
    _count?: boolean | AllergyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergy"]>

  export type AllergySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["allergy"]>

  export type AllergySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["allergy"]>

  export type AllergySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AllergyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["allergy"]>
  export type AllergyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patientAllergies?: boolean | Allergy$patientAllergiesArgs<ExtArgs>
    _count?: boolean | AllergyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AllergyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AllergyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AllergyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Allergy"
    objects: {
      patientAllergies: Prisma.$PatientAllergyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["allergy"]>
    composites: {}
  }

  type AllergyGetPayload<S extends boolean | null | undefined | AllergyDefaultArgs> = $Result.GetResult<Prisma.$AllergyPayload, S>

  type AllergyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllergyCountAggregateInputType | true
    }

  export interface AllergyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Allergy'], meta: { name: 'Allergy' } }
    /**
     * Find zero or one Allergy that matches the filter.
     * @param {AllergyFindUniqueArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllergyFindUniqueArgs>(args: SelectSubset<T, AllergyFindUniqueArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allergy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllergyFindUniqueOrThrowArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllergyFindUniqueOrThrowArgs>(args: SelectSubset<T, AllergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyFindFirstArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllergyFindFirstArgs>(args?: SelectSubset<T, AllergyFindFirstArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyFindFirstOrThrowArgs} args - Arguments to find a Allergy
     * @example
     * // Get one Allergy
     * const allergy = await prisma.allergy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllergyFindFirstOrThrowArgs>(args?: SelectSubset<T, AllergyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allergies
     * const allergies = await prisma.allergy.findMany()
     * 
     * // Get first 10 Allergies
     * const allergies = await prisma.allergy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allergyWithIdOnly = await prisma.allergy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllergyFindManyArgs>(args?: SelectSubset<T, AllergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allergy.
     * @param {AllergyCreateArgs} args - Arguments to create a Allergy.
     * @example
     * // Create one Allergy
     * const Allergy = await prisma.allergy.create({
     *   data: {
     *     // ... data to create a Allergy
     *   }
     * })
     * 
     */
    create<T extends AllergyCreateArgs>(args: SelectSubset<T, AllergyCreateArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allergies.
     * @param {AllergyCreateManyArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergy = await prisma.allergy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllergyCreateManyArgs>(args?: SelectSubset<T, AllergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Allergies and returns the data saved in the database.
     * @param {AllergyCreateManyAndReturnArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergy = await prisma.allergy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Allergies and only return the `id`
     * const allergyWithIdOnly = await prisma.allergy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllergyCreateManyAndReturnArgs>(args?: SelectSubset<T, AllergyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Allergy.
     * @param {AllergyDeleteArgs} args - Arguments to delete one Allergy.
     * @example
     * // Delete one Allergy
     * const Allergy = await prisma.allergy.delete({
     *   where: {
     *     // ... filter to delete one Allergy
     *   }
     * })
     * 
     */
    delete<T extends AllergyDeleteArgs>(args: SelectSubset<T, AllergyDeleteArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allergy.
     * @param {AllergyUpdateArgs} args - Arguments to update one Allergy.
     * @example
     * // Update one Allergy
     * const allergy = await prisma.allergy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllergyUpdateArgs>(args: SelectSubset<T, AllergyUpdateArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allergies.
     * @param {AllergyDeleteManyArgs} args - Arguments to filter Allergies to delete.
     * @example
     * // Delete a few Allergies
     * const { count } = await prisma.allergy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllergyDeleteManyArgs>(args?: SelectSubset<T, AllergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allergies
     * const allergy = await prisma.allergy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllergyUpdateManyArgs>(args: SelectSubset<T, AllergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies and returns the data updated in the database.
     * @param {AllergyUpdateManyAndReturnArgs} args - Arguments to update many Allergies.
     * @example
     * // Update many Allergies
     * const allergy = await prisma.allergy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Allergies and only return the `id`
     * const allergyWithIdOnly = await prisma.allergy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AllergyUpdateManyAndReturnArgs>(args: SelectSubset<T, AllergyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Allergy.
     * @param {AllergyUpsertArgs} args - Arguments to update or create a Allergy.
     * @example
     * // Update or create a Allergy
     * const allergy = await prisma.allergy.upsert({
     *   create: {
     *     // ... data to create a Allergy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allergy we want to update
     *   }
     * })
     */
    upsert<T extends AllergyUpsertArgs>(args: SelectSubset<T, AllergyUpsertArgs<ExtArgs>>): Prisma__AllergyClient<$Result.GetResult<Prisma.$AllergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyCountArgs} args - Arguments to filter Allergies to count.
     * @example
     * // Count the number of Allergies
     * const count = await prisma.allergy.count({
     *   where: {
     *     // ... the filter for the Allergies we want to count
     *   }
     * })
    **/
    count<T extends AllergyCountArgs>(
      args?: Subset<T, AllergyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllergyAggregateArgs>(args: Subset<T, AllergyAggregateArgs>): Prisma.PrismaPromise<GetAllergyAggregateType<T>>

    /**
     * Group by Allergy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllergyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllergyGroupByArgs['orderBy'] }
        : { orderBy?: AllergyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Allergy model
   */
  readonly fields: AllergyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Allergy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllergyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patientAllergies<T extends Allergy$patientAllergiesArgs<ExtArgs> = {}>(args?: Subset<T, Allergy$patientAllergiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Allergy model
   */
  interface AllergyFieldRefs {
    readonly id: FieldRef<"Allergy", 'Int'>
    readonly name: FieldRef<"Allergy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Allergy findUnique
   */
  export type AllergyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy findUniqueOrThrow
   */
  export type AllergyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy findFirst
   */
  export type AllergyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allergies.
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allergies.
     */
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * Allergy findFirstOrThrow
   */
  export type AllergyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergy to fetch.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allergies.
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allergies.
     */
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * Allergy findMany
   */
  export type AllergyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter, which Allergies to fetch.
     */
    where?: AllergyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allergies to fetch.
     */
    orderBy?: AllergyOrderByWithRelationInput | AllergyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Allergies.
     */
    cursor?: AllergyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allergies.
     */
    skip?: number
    distinct?: AllergyScalarFieldEnum | AllergyScalarFieldEnum[]
  }

  /**
   * Allergy create
   */
  export type AllergyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * The data needed to create a Allergy.
     */
    data: XOR<AllergyCreateInput, AllergyUncheckedCreateInput>
  }

  /**
   * Allergy createMany
   */
  export type AllergyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Allergies.
     */
    data: AllergyCreateManyInput | AllergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Allergy createManyAndReturn
   */
  export type AllergyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * The data used to create many Allergies.
     */
    data: AllergyCreateManyInput | AllergyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Allergy update
   */
  export type AllergyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * The data needed to update a Allergy.
     */
    data: XOR<AllergyUpdateInput, AllergyUncheckedUpdateInput>
    /**
     * Choose, which Allergy to update.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy updateMany
   */
  export type AllergyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Allergies.
     */
    data: XOR<AllergyUpdateManyMutationInput, AllergyUncheckedUpdateManyInput>
    /**
     * Filter which Allergies to update
     */
    where?: AllergyWhereInput
    /**
     * Limit how many Allergies to update.
     */
    limit?: number
  }

  /**
   * Allergy updateManyAndReturn
   */
  export type AllergyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * The data used to update Allergies.
     */
    data: XOR<AllergyUpdateManyMutationInput, AllergyUncheckedUpdateManyInput>
    /**
     * Filter which Allergies to update
     */
    where?: AllergyWhereInput
    /**
     * Limit how many Allergies to update.
     */
    limit?: number
  }

  /**
   * Allergy upsert
   */
  export type AllergyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * The filter to search for the Allergy to update in case it exists.
     */
    where: AllergyWhereUniqueInput
    /**
     * In case the Allergy found by the `where` argument doesn't exist, create a new Allergy with this data.
     */
    create: XOR<AllergyCreateInput, AllergyUncheckedCreateInput>
    /**
     * In case the Allergy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllergyUpdateInput, AllergyUncheckedUpdateInput>
  }

  /**
   * Allergy delete
   */
  export type AllergyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
    /**
     * Filter which Allergy to delete.
     */
    where: AllergyWhereUniqueInput
  }

  /**
   * Allergy deleteMany
   */
  export type AllergyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allergies to delete
     */
    where?: AllergyWhereInput
    /**
     * Limit how many Allergies to delete.
     */
    limit?: number
  }

  /**
   * Allergy.patientAllergies
   */
  export type Allergy$patientAllergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientAllergy
     */
    select?: PatientAllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientAllergy
     */
    omit?: PatientAllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientAllergyInclude<ExtArgs> | null
    where?: PatientAllergyWhereInput
    orderBy?: PatientAllergyOrderByWithRelationInput | PatientAllergyOrderByWithRelationInput[]
    cursor?: PatientAllergyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientAllergyScalarFieldEnum | PatientAllergyScalarFieldEnum[]
  }

  /**
   * Allergy without action
   */
  export type AllergyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allergy
     */
    select?: AllergySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allergy
     */
    omit?: AllergyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AllergyInclude<ExtArgs> | null
  }


  /**
   * Model Hospitalization
   */

  export type AggregateHospitalization = {
    _count: HospitalizationCountAggregateOutputType | null
    _avg: HospitalizationAvgAggregateOutputType | null
    _sum: HospitalizationSumAggregateOutputType | null
    _min: HospitalizationMinAggregateOutputType | null
    _max: HospitalizationMaxAggregateOutputType | null
  }

  export type HospitalizationAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
    roomNumber: number | null
  }

  export type HospitalizationSumAggregateOutputType = {
    id: number | null
    patientId: number | null
    roomNumber: number | null
  }

  export type HospitalizationMinAggregateOutputType = {
    id: number | null
    entryDate: Date | null
    dischargeDate: Date | null
    reason: string | null
    patientId: number | null
    roomNumber: number | null
  }

  export type HospitalizationMaxAggregateOutputType = {
    id: number | null
    entryDate: Date | null
    dischargeDate: Date | null
    reason: string | null
    patientId: number | null
    roomNumber: number | null
  }

  export type HospitalizationCountAggregateOutputType = {
    id: number
    entryDate: number
    dischargeDate: number
    reason: number
    patientId: number
    roomNumber: number
    _all: number
  }


  export type HospitalizationAvgAggregateInputType = {
    id?: true
    patientId?: true
    roomNumber?: true
  }

  export type HospitalizationSumAggregateInputType = {
    id?: true
    patientId?: true
    roomNumber?: true
  }

  export type HospitalizationMinAggregateInputType = {
    id?: true
    entryDate?: true
    dischargeDate?: true
    reason?: true
    patientId?: true
    roomNumber?: true
  }

  export type HospitalizationMaxAggregateInputType = {
    id?: true
    entryDate?: true
    dischargeDate?: true
    reason?: true
    patientId?: true
    roomNumber?: true
  }

  export type HospitalizationCountAggregateInputType = {
    id?: true
    entryDate?: true
    dischargeDate?: true
    reason?: true
    patientId?: true
    roomNumber?: true
    _all?: true
  }

  export type HospitalizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitalization to aggregate.
     */
    where?: HospitalizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitalizations to fetch.
     */
    orderBy?: HospitalizationOrderByWithRelationInput | HospitalizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospitalizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitalizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitalizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospitalizations
    **/
    _count?: true | HospitalizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospitalizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospitalizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospitalizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospitalizationMaxAggregateInputType
  }

  export type GetHospitalizationAggregateType<T extends HospitalizationAggregateArgs> = {
        [P in keyof T & keyof AggregateHospitalization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospitalization[P]>
      : GetScalarType<T[P], AggregateHospitalization[P]>
  }




  export type HospitalizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospitalizationWhereInput
    orderBy?: HospitalizationOrderByWithAggregationInput | HospitalizationOrderByWithAggregationInput[]
    by: HospitalizationScalarFieldEnum[] | HospitalizationScalarFieldEnum
    having?: HospitalizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospitalizationCountAggregateInputType | true
    _avg?: HospitalizationAvgAggregateInputType
    _sum?: HospitalizationSumAggregateInputType
    _min?: HospitalizationMinAggregateInputType
    _max?: HospitalizationMaxAggregateInputType
  }

  export type HospitalizationGroupByOutputType = {
    id: number
    entryDate: Date
    dischargeDate: Date | null
    reason: string
    patientId: number
    roomNumber: number
    _count: HospitalizationCountAggregateOutputType | null
    _avg: HospitalizationAvgAggregateOutputType | null
    _sum: HospitalizationSumAggregateOutputType | null
    _min: HospitalizationMinAggregateOutputType | null
    _max: HospitalizationMaxAggregateOutputType | null
  }

  type GetHospitalizationGroupByPayload<T extends HospitalizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospitalizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospitalizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospitalizationGroupByOutputType[P]>
            : GetScalarType<T[P], HospitalizationGroupByOutputType[P]>
        }
      >
    >


  export type HospitalizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryDate?: boolean
    dischargeDate?: boolean
    reason?: boolean
    patientId?: boolean
    roomNumber?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospitalization"]>

  export type HospitalizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryDate?: boolean
    dischargeDate?: boolean
    reason?: boolean
    patientId?: boolean
    roomNumber?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospitalization"]>

  export type HospitalizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryDate?: boolean
    dischargeDate?: boolean
    reason?: boolean
    patientId?: boolean
    roomNumber?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospitalization"]>

  export type HospitalizationSelectScalar = {
    id?: boolean
    entryDate?: boolean
    dischargeDate?: boolean
    reason?: boolean
    patientId?: boolean
    roomNumber?: boolean
  }

  export type HospitalizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entryDate" | "dischargeDate" | "reason" | "patientId" | "roomNumber", ExtArgs["result"]["hospitalization"]>
  export type HospitalizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type HospitalizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type HospitalizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $HospitalizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospitalization"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entryDate: Date
      dischargeDate: Date | null
      reason: string
      patientId: number
      roomNumber: number
    }, ExtArgs["result"]["hospitalization"]>
    composites: {}
  }

  type HospitalizationGetPayload<S extends boolean | null | undefined | HospitalizationDefaultArgs> = $Result.GetResult<Prisma.$HospitalizationPayload, S>

  type HospitalizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospitalizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospitalizationCountAggregateInputType | true
    }

  export interface HospitalizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospitalization'], meta: { name: 'Hospitalization' } }
    /**
     * Find zero or one Hospitalization that matches the filter.
     * @param {HospitalizationFindUniqueArgs} args - Arguments to find a Hospitalization
     * @example
     * // Get one Hospitalization
     * const hospitalization = await prisma.hospitalization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospitalizationFindUniqueArgs>(args: SelectSubset<T, HospitalizationFindUniqueArgs<ExtArgs>>): Prisma__HospitalizationClient<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospitalization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospitalizationFindUniqueOrThrowArgs} args - Arguments to find a Hospitalization
     * @example
     * // Get one Hospitalization
     * const hospitalization = await prisma.hospitalization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospitalizationFindUniqueOrThrowArgs>(args: SelectSubset<T, HospitalizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospitalizationClient<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospitalization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalizationFindFirstArgs} args - Arguments to find a Hospitalization
     * @example
     * // Get one Hospitalization
     * const hospitalization = await prisma.hospitalization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospitalizationFindFirstArgs>(args?: SelectSubset<T, HospitalizationFindFirstArgs<ExtArgs>>): Prisma__HospitalizationClient<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospitalization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalizationFindFirstOrThrowArgs} args - Arguments to find a Hospitalization
     * @example
     * // Get one Hospitalization
     * const hospitalization = await prisma.hospitalization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospitalizationFindFirstOrThrowArgs>(args?: SelectSubset<T, HospitalizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospitalizationClient<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospitalizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospitalizations
     * const hospitalizations = await prisma.hospitalization.findMany()
     * 
     * // Get first 10 Hospitalizations
     * const hospitalizations = await prisma.hospitalization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospitalizationWithIdOnly = await prisma.hospitalization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospitalizationFindManyArgs>(args?: SelectSubset<T, HospitalizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospitalization.
     * @param {HospitalizationCreateArgs} args - Arguments to create a Hospitalization.
     * @example
     * // Create one Hospitalization
     * const Hospitalization = await prisma.hospitalization.create({
     *   data: {
     *     // ... data to create a Hospitalization
     *   }
     * })
     * 
     */
    create<T extends HospitalizationCreateArgs>(args: SelectSubset<T, HospitalizationCreateArgs<ExtArgs>>): Prisma__HospitalizationClient<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospitalizations.
     * @param {HospitalizationCreateManyArgs} args - Arguments to create many Hospitalizations.
     * @example
     * // Create many Hospitalizations
     * const hospitalization = await prisma.hospitalization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospitalizationCreateManyArgs>(args?: SelectSubset<T, HospitalizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospitalizations and returns the data saved in the database.
     * @param {HospitalizationCreateManyAndReturnArgs} args - Arguments to create many Hospitalizations.
     * @example
     * // Create many Hospitalizations
     * const hospitalization = await prisma.hospitalization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospitalizations and only return the `id`
     * const hospitalizationWithIdOnly = await prisma.hospitalization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospitalizationCreateManyAndReturnArgs>(args?: SelectSubset<T, HospitalizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospitalization.
     * @param {HospitalizationDeleteArgs} args - Arguments to delete one Hospitalization.
     * @example
     * // Delete one Hospitalization
     * const Hospitalization = await prisma.hospitalization.delete({
     *   where: {
     *     // ... filter to delete one Hospitalization
     *   }
     * })
     * 
     */
    delete<T extends HospitalizationDeleteArgs>(args: SelectSubset<T, HospitalizationDeleteArgs<ExtArgs>>): Prisma__HospitalizationClient<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospitalization.
     * @param {HospitalizationUpdateArgs} args - Arguments to update one Hospitalization.
     * @example
     * // Update one Hospitalization
     * const hospitalization = await prisma.hospitalization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospitalizationUpdateArgs>(args: SelectSubset<T, HospitalizationUpdateArgs<ExtArgs>>): Prisma__HospitalizationClient<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospitalizations.
     * @param {HospitalizationDeleteManyArgs} args - Arguments to filter Hospitalizations to delete.
     * @example
     * // Delete a few Hospitalizations
     * const { count } = await prisma.hospitalization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospitalizationDeleteManyArgs>(args?: SelectSubset<T, HospitalizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitalizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospitalizations
     * const hospitalization = await prisma.hospitalization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospitalizationUpdateManyArgs>(args: SelectSubset<T, HospitalizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospitalizations and returns the data updated in the database.
     * @param {HospitalizationUpdateManyAndReturnArgs} args - Arguments to update many Hospitalizations.
     * @example
     * // Update many Hospitalizations
     * const hospitalization = await prisma.hospitalization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospitalizations and only return the `id`
     * const hospitalizationWithIdOnly = await prisma.hospitalization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HospitalizationUpdateManyAndReturnArgs>(args: SelectSubset<T, HospitalizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospitalization.
     * @param {HospitalizationUpsertArgs} args - Arguments to update or create a Hospitalization.
     * @example
     * // Update or create a Hospitalization
     * const hospitalization = await prisma.hospitalization.upsert({
     *   create: {
     *     // ... data to create a Hospitalization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospitalization we want to update
     *   }
     * })
     */
    upsert<T extends HospitalizationUpsertArgs>(args: SelectSubset<T, HospitalizationUpsertArgs<ExtArgs>>): Prisma__HospitalizationClient<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospitalizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalizationCountArgs} args - Arguments to filter Hospitalizations to count.
     * @example
     * // Count the number of Hospitalizations
     * const count = await prisma.hospitalization.count({
     *   where: {
     *     // ... the filter for the Hospitalizations we want to count
     *   }
     * })
    **/
    count<T extends HospitalizationCountArgs>(
      args?: Subset<T, HospitalizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospitalizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospitalization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HospitalizationAggregateArgs>(args: Subset<T, HospitalizationAggregateArgs>): Prisma.PrismaPromise<GetHospitalizationAggregateType<T>>

    /**
     * Group by Hospitalization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospitalizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HospitalizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospitalizationGroupByArgs['orderBy'] }
        : { orderBy?: HospitalizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HospitalizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospitalization model
   */
  readonly fields: HospitalizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospitalization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospitalizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hospitalization model
   */
  interface HospitalizationFieldRefs {
    readonly id: FieldRef<"Hospitalization", 'Int'>
    readonly entryDate: FieldRef<"Hospitalization", 'DateTime'>
    readonly dischargeDate: FieldRef<"Hospitalization", 'DateTime'>
    readonly reason: FieldRef<"Hospitalization", 'String'>
    readonly patientId: FieldRef<"Hospitalization", 'Int'>
    readonly roomNumber: FieldRef<"Hospitalization", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Hospitalization findUnique
   */
  export type HospitalizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    /**
     * Filter, which Hospitalization to fetch.
     */
    where: HospitalizationWhereUniqueInput
  }

  /**
   * Hospitalization findUniqueOrThrow
   */
  export type HospitalizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    /**
     * Filter, which Hospitalization to fetch.
     */
    where: HospitalizationWhereUniqueInput
  }

  /**
   * Hospitalization findFirst
   */
  export type HospitalizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    /**
     * Filter, which Hospitalization to fetch.
     */
    where?: HospitalizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitalizations to fetch.
     */
    orderBy?: HospitalizationOrderByWithRelationInput | HospitalizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitalizations.
     */
    cursor?: HospitalizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitalizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitalizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitalizations.
     */
    distinct?: HospitalizationScalarFieldEnum | HospitalizationScalarFieldEnum[]
  }

  /**
   * Hospitalization findFirstOrThrow
   */
  export type HospitalizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    /**
     * Filter, which Hospitalization to fetch.
     */
    where?: HospitalizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitalizations to fetch.
     */
    orderBy?: HospitalizationOrderByWithRelationInput | HospitalizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospitalizations.
     */
    cursor?: HospitalizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitalizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitalizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospitalizations.
     */
    distinct?: HospitalizationScalarFieldEnum | HospitalizationScalarFieldEnum[]
  }

  /**
   * Hospitalization findMany
   */
  export type HospitalizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    /**
     * Filter, which Hospitalizations to fetch.
     */
    where?: HospitalizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospitalizations to fetch.
     */
    orderBy?: HospitalizationOrderByWithRelationInput | HospitalizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospitalizations.
     */
    cursor?: HospitalizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospitalizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospitalizations.
     */
    skip?: number
    distinct?: HospitalizationScalarFieldEnum | HospitalizationScalarFieldEnum[]
  }

  /**
   * Hospitalization create
   */
  export type HospitalizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospitalization.
     */
    data: XOR<HospitalizationCreateInput, HospitalizationUncheckedCreateInput>
  }

  /**
   * Hospitalization createMany
   */
  export type HospitalizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospitalizations.
     */
    data: HospitalizationCreateManyInput | HospitalizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospitalization createManyAndReturn
   */
  export type HospitalizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * The data used to create many Hospitalizations.
     */
    data: HospitalizationCreateManyInput | HospitalizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hospitalization update
   */
  export type HospitalizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospitalization.
     */
    data: XOR<HospitalizationUpdateInput, HospitalizationUncheckedUpdateInput>
    /**
     * Choose, which Hospitalization to update.
     */
    where: HospitalizationWhereUniqueInput
  }

  /**
   * Hospitalization updateMany
   */
  export type HospitalizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospitalizations.
     */
    data: XOR<HospitalizationUpdateManyMutationInput, HospitalizationUncheckedUpdateManyInput>
    /**
     * Filter which Hospitalizations to update
     */
    where?: HospitalizationWhereInput
    /**
     * Limit how many Hospitalizations to update.
     */
    limit?: number
  }

  /**
   * Hospitalization updateManyAndReturn
   */
  export type HospitalizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * The data used to update Hospitalizations.
     */
    data: XOR<HospitalizationUpdateManyMutationInput, HospitalizationUncheckedUpdateManyInput>
    /**
     * Filter which Hospitalizations to update
     */
    where?: HospitalizationWhereInput
    /**
     * Limit how many Hospitalizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hospitalization upsert
   */
  export type HospitalizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospitalization to update in case it exists.
     */
    where: HospitalizationWhereUniqueInput
    /**
     * In case the Hospitalization found by the `where` argument doesn't exist, create a new Hospitalization with this data.
     */
    create: XOR<HospitalizationCreateInput, HospitalizationUncheckedCreateInput>
    /**
     * In case the Hospitalization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospitalizationUpdateInput, HospitalizationUncheckedUpdateInput>
  }

  /**
   * Hospitalization delete
   */
  export type HospitalizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    /**
     * Filter which Hospitalization to delete.
     */
    where: HospitalizationWhereUniqueInput
  }

  /**
   * Hospitalization deleteMany
   */
  export type HospitalizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospitalizations to delete
     */
    where?: HospitalizationWhereInput
    /**
     * Limit how many Hospitalizations to delete.
     */
    limit?: number
  }

  /**
   * Hospitalization without action
   */
  export type HospitalizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    number: number | null
  }

  export type RoomSumAggregateOutputType = {
    number: number | null
  }

  export type RoomMinAggregateOutputType = {
    number: number | null
    type: $Enums.RoomType | null
    floor: string | null
    state: $Enums.RoomState | null
  }

  export type RoomMaxAggregateOutputType = {
    number: number | null
    type: $Enums.RoomType | null
    floor: string | null
    state: $Enums.RoomState | null
  }

  export type RoomCountAggregateOutputType = {
    number: number
    type: number
    floor: number
    state: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    number?: true
  }

  export type RoomSumAggregateInputType = {
    number?: true
  }

  export type RoomMinAggregateInputType = {
    number?: true
    type?: true
    floor?: true
    state?: true
  }

  export type RoomMaxAggregateInputType = {
    number?: true
    type?: true
    floor?: true
    state?: true
  }

  export type RoomCountAggregateInputType = {
    number?: true
    type?: true
    floor?: true
    state?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    number: number
    type: $Enums.RoomType
    floor: string
    state: $Enums.RoomState
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    type?: boolean
    floor?: boolean
    state?: boolean
    hospitalizations?: boolean | Room$hospitalizationsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    type?: boolean
    floor?: boolean
    state?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    type?: boolean
    floor?: boolean
    state?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    number?: boolean
    type?: boolean
    floor?: boolean
    state?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"number" | "type" | "floor" | "state", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospitalizations?: boolean | Room$hospitalizationsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      hospitalizations: Prisma.$HospitalizationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      number: number
      type: $Enums.RoomType
      floor: string
      state: $Enums.RoomState
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `number`
     * const roomWithNumberOnly = await prisma.room.findMany({ select: { number: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `number`
     * const roomWithNumberOnly = await prisma.room.createManyAndReturn({
     *   select: { number: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `number`
     * const roomWithNumberOnly = await prisma.room.updateManyAndReturn({
     *   select: { number: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospitalizations<T extends Room$hospitalizationsArgs<ExtArgs> = {}>(args?: Subset<T, Room$hospitalizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospitalizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly number: FieldRef<"Room", 'Int'>
    readonly type: FieldRef<"Room", 'RoomType'>
    readonly floor: FieldRef<"Room", 'String'>
    readonly state: FieldRef<"Room", 'RoomState'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.hospitalizations
   */
  export type Room$hospitalizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospitalization
     */
    select?: HospitalizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospitalization
     */
    omit?: HospitalizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospitalizationInclude<ExtArgs> | null
    where?: HospitalizationWhereInput
    orderBy?: HospitalizationOrderByWithRelationInput | HospitalizationOrderByWithRelationInput[]
    cursor?: HospitalizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HospitalizationScalarFieldEnum | HospitalizationScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    id: number | null
    yearsOfExp: number | null
  }

  export type DoctorSumAggregateOutputType = {
    id: number | null
    yearsOfExp: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: number | null
    professionalID: string | null
    name: string | null
    paternalSurname: string | null
    maternalSurname: string | null
    yearsOfExp: number | null
    phone: string | null
    email: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: number | null
    professionalID: string | null
    name: string | null
    paternalSurname: string | null
    maternalSurname: string | null
    yearsOfExp: number | null
    phone: string | null
    email: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    professionalID: number
    name: number
    paternalSurname: number
    maternalSurname: number
    yearsOfExp: number
    phone: number
    email: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    id?: true
    yearsOfExp?: true
  }

  export type DoctorSumAggregateInputType = {
    id?: true
    yearsOfExp?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    professionalID?: true
    name?: true
    paternalSurname?: true
    maternalSurname?: true
    yearsOfExp?: true
    phone?: true
    email?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    professionalID?: true
    name?: true
    paternalSurname?: true
    maternalSurname?: true
    yearsOfExp?: true
    phone?: true
    email?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    professionalID?: true
    name?: true
    paternalSurname?: true
    maternalSurname?: true
    yearsOfExp?: true
    phone?: true
    email?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: number
    professionalID: string
    name: string
    paternalSurname: string
    maternalSurname: string
    yearsOfExp: number
    phone: string
    email: string
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalID?: boolean
    name?: boolean
    paternalSurname?: boolean
    maternalSurname?: boolean
    yearsOfExp?: boolean
    phone?: boolean
    email?: boolean
    doctorSpeciality?: boolean | Doctor$doctorSpecialityArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalID?: boolean
    name?: boolean
    paternalSurname?: boolean
    maternalSurname?: boolean
    yearsOfExp?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalID?: boolean
    name?: boolean
    paternalSurname?: boolean
    maternalSurname?: boolean
    yearsOfExp?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    professionalID?: boolean
    name?: boolean
    paternalSurname?: boolean
    maternalSurname?: boolean
    yearsOfExp?: boolean
    phone?: boolean
    email?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionalID" | "name" | "paternalSurname" | "maternalSurname" | "yearsOfExp" | "phone" | "email", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpeciality?: boolean | Doctor$doctorSpecialityArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      doctorSpeciality: Prisma.$DoctorSpecialityPayload<ExtArgs>[]
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      professionalID: string
      name: string
      paternalSurname: string
      maternalSurname: string
      yearsOfExp: number
      phone: string
      email: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorSpeciality<T extends Doctor$doctorSpecialityArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$doctorSpecialityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends Doctor$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'Int'>
    readonly professionalID: FieldRef<"Doctor", 'String'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly paternalSurname: FieldRef<"Doctor", 'String'>
    readonly maternalSurname: FieldRef<"Doctor", 'String'>
    readonly yearsOfExp: FieldRef<"Doctor", 'Int'>
    readonly phone: FieldRef<"Doctor", 'String'>
    readonly email: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.doctorSpeciality
   */
  export type Doctor$doctorSpecialityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    where?: DoctorSpecialityWhereInput
    orderBy?: DoctorSpecialityOrderByWithRelationInput | DoctorSpecialityOrderByWithRelationInput[]
    cursor?: DoctorSpecialityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSpecialityScalarFieldEnum | DoctorSpecialityScalarFieldEnum[]
  }

  /**
   * Doctor.appointments
   */
  export type Doctor$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSpeciality
   */

  export type AggregateDoctorSpeciality = {
    _count: DoctorSpecialityCountAggregateOutputType | null
    _avg: DoctorSpecialityAvgAggregateOutputType | null
    _sum: DoctorSpecialitySumAggregateOutputType | null
    _min: DoctorSpecialityMinAggregateOutputType | null
    _max: DoctorSpecialityMaxAggregateOutputType | null
  }

  export type DoctorSpecialityAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    specialityId: number | null
  }

  export type DoctorSpecialitySumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    specialityId: number | null
  }

  export type DoctorSpecialityMinAggregateOutputType = {
    id: number | null
    doctorId: number | null
    specialityId: number | null
  }

  export type DoctorSpecialityMaxAggregateOutputType = {
    id: number | null
    doctorId: number | null
    specialityId: number | null
  }

  export type DoctorSpecialityCountAggregateOutputType = {
    id: number
    doctorId: number
    specialityId: number
    _all: number
  }


  export type DoctorSpecialityAvgAggregateInputType = {
    id?: true
    doctorId?: true
    specialityId?: true
  }

  export type DoctorSpecialitySumAggregateInputType = {
    id?: true
    doctorId?: true
    specialityId?: true
  }

  export type DoctorSpecialityMinAggregateInputType = {
    id?: true
    doctorId?: true
    specialityId?: true
  }

  export type DoctorSpecialityMaxAggregateInputType = {
    id?: true
    doctorId?: true
    specialityId?: true
  }

  export type DoctorSpecialityCountAggregateInputType = {
    id?: true
    doctorId?: true
    specialityId?: true
    _all?: true
  }

  export type DoctorSpecialityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpeciality to aggregate.
     */
    where?: DoctorSpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialities to fetch.
     */
    orderBy?: DoctorSpecialityOrderByWithRelationInput | DoctorSpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorSpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSpecialities
    **/
    _count?: true | DoctorSpecialityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorSpecialityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSpecialitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSpecialityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSpecialityMaxAggregateInputType
  }

  export type GetDoctorSpecialityAggregateType<T extends DoctorSpecialityAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSpeciality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSpeciality[P]>
      : GetScalarType<T[P], AggregateDoctorSpeciality[P]>
  }




  export type DoctorSpecialityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecialityWhereInput
    orderBy?: DoctorSpecialityOrderByWithAggregationInput | DoctorSpecialityOrderByWithAggregationInput[]
    by: DoctorSpecialityScalarFieldEnum[] | DoctorSpecialityScalarFieldEnum
    having?: DoctorSpecialityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSpecialityCountAggregateInputType | true
    _avg?: DoctorSpecialityAvgAggregateInputType
    _sum?: DoctorSpecialitySumAggregateInputType
    _min?: DoctorSpecialityMinAggregateInputType
    _max?: DoctorSpecialityMaxAggregateInputType
  }

  export type DoctorSpecialityGroupByOutputType = {
    id: number
    doctorId: number
    specialityId: number
    _count: DoctorSpecialityCountAggregateOutputType | null
    _avg: DoctorSpecialityAvgAggregateOutputType | null
    _sum: DoctorSpecialitySumAggregateOutputType | null
    _min: DoctorSpecialityMinAggregateOutputType | null
    _max: DoctorSpecialityMaxAggregateOutputType | null
  }

  type GetDoctorSpecialityGroupByPayload<T extends DoctorSpecialityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSpecialityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSpecialityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSpecialityGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSpecialityGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSpecialitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    specialityId?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpeciality"]>

  export type DoctorSpecialitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    specialityId?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpeciality"]>

  export type DoctorSpecialitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    specialityId?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpeciality"]>

  export type DoctorSpecialitySelectScalar = {
    id?: boolean
    doctorId?: boolean
    specialityId?: boolean
  }

  export type DoctorSpecialityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "specialityId", ExtArgs["result"]["doctorSpeciality"]>
  export type DoctorSpecialityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityDefaultArgs<ExtArgs>
  }
  export type DoctorSpecialityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityDefaultArgs<ExtArgs>
  }
  export type DoctorSpecialityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    speciality?: boolean | SpecialityDefaultArgs<ExtArgs>
  }

  export type $DoctorSpecialityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSpeciality"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
      speciality: Prisma.$SpecialityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      doctorId: number
      specialityId: number
    }, ExtArgs["result"]["doctorSpeciality"]>
    composites: {}
  }

  type DoctorSpecialityGetPayload<S extends boolean | null | undefined | DoctorSpecialityDefaultArgs> = $Result.GetResult<Prisma.$DoctorSpecialityPayload, S>

  type DoctorSpecialityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorSpecialityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorSpecialityCountAggregateInputType | true
    }

  export interface DoctorSpecialityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSpeciality'], meta: { name: 'DoctorSpeciality' } }
    /**
     * Find zero or one DoctorSpeciality that matches the filter.
     * @param {DoctorSpecialityFindUniqueArgs} args - Arguments to find a DoctorSpeciality
     * @example
     * // Get one DoctorSpeciality
     * const doctorSpeciality = await prisma.doctorSpeciality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorSpecialityFindUniqueArgs>(args: SelectSubset<T, DoctorSpecialityFindUniqueArgs<ExtArgs>>): Prisma__DoctorSpecialityClient<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSpeciality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorSpecialityFindUniqueOrThrowArgs} args - Arguments to find a DoctorSpeciality
     * @example
     * // Get one DoctorSpeciality
     * const doctorSpeciality = await prisma.doctorSpeciality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorSpecialityFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorSpecialityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecialityClient<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpeciality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialityFindFirstArgs} args - Arguments to find a DoctorSpeciality
     * @example
     * // Get one DoctorSpeciality
     * const doctorSpeciality = await prisma.doctorSpeciality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorSpecialityFindFirstArgs>(args?: SelectSubset<T, DoctorSpecialityFindFirstArgs<ExtArgs>>): Prisma__DoctorSpecialityClient<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpeciality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialityFindFirstOrThrowArgs} args - Arguments to find a DoctorSpeciality
     * @example
     * // Get one DoctorSpeciality
     * const doctorSpeciality = await prisma.doctorSpeciality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorSpecialityFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorSpecialityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecialityClient<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSpecialities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSpecialities
     * const doctorSpecialities = await prisma.doctorSpeciality.findMany()
     * 
     * // Get first 10 DoctorSpecialities
     * const doctorSpecialities = await prisma.doctorSpeciality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorSpecialityWithIdOnly = await prisma.doctorSpeciality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorSpecialityFindManyArgs>(args?: SelectSubset<T, DoctorSpecialityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSpeciality.
     * @param {DoctorSpecialityCreateArgs} args - Arguments to create a DoctorSpeciality.
     * @example
     * // Create one DoctorSpeciality
     * const DoctorSpeciality = await prisma.doctorSpeciality.create({
     *   data: {
     *     // ... data to create a DoctorSpeciality
     *   }
     * })
     * 
     */
    create<T extends DoctorSpecialityCreateArgs>(args: SelectSubset<T, DoctorSpecialityCreateArgs<ExtArgs>>): Prisma__DoctorSpecialityClient<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSpecialities.
     * @param {DoctorSpecialityCreateManyArgs} args - Arguments to create many DoctorSpecialities.
     * @example
     * // Create many DoctorSpecialities
     * const doctorSpeciality = await prisma.doctorSpeciality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorSpecialityCreateManyArgs>(args?: SelectSubset<T, DoctorSpecialityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorSpecialities and returns the data saved in the database.
     * @param {DoctorSpecialityCreateManyAndReturnArgs} args - Arguments to create many DoctorSpecialities.
     * @example
     * // Create many DoctorSpecialities
     * const doctorSpeciality = await prisma.doctorSpeciality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorSpecialities and only return the `id`
     * const doctorSpecialityWithIdOnly = await prisma.doctorSpeciality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorSpecialityCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorSpecialityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorSpeciality.
     * @param {DoctorSpecialityDeleteArgs} args - Arguments to delete one DoctorSpeciality.
     * @example
     * // Delete one DoctorSpeciality
     * const DoctorSpeciality = await prisma.doctorSpeciality.delete({
     *   where: {
     *     // ... filter to delete one DoctorSpeciality
     *   }
     * })
     * 
     */
    delete<T extends DoctorSpecialityDeleteArgs>(args: SelectSubset<T, DoctorSpecialityDeleteArgs<ExtArgs>>): Prisma__DoctorSpecialityClient<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSpeciality.
     * @param {DoctorSpecialityUpdateArgs} args - Arguments to update one DoctorSpeciality.
     * @example
     * // Update one DoctorSpeciality
     * const doctorSpeciality = await prisma.doctorSpeciality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorSpecialityUpdateArgs>(args: SelectSubset<T, DoctorSpecialityUpdateArgs<ExtArgs>>): Prisma__DoctorSpecialityClient<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSpecialities.
     * @param {DoctorSpecialityDeleteManyArgs} args - Arguments to filter DoctorSpecialities to delete.
     * @example
     * // Delete a few DoctorSpecialities
     * const { count } = await prisma.doctorSpeciality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorSpecialityDeleteManyArgs>(args?: SelectSubset<T, DoctorSpecialityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecialities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSpecialities
     * const doctorSpeciality = await prisma.doctorSpeciality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorSpecialityUpdateManyArgs>(args: SelectSubset<T, DoctorSpecialityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecialities and returns the data updated in the database.
     * @param {DoctorSpecialityUpdateManyAndReturnArgs} args - Arguments to update many DoctorSpecialities.
     * @example
     * // Update many DoctorSpecialities
     * const doctorSpeciality = await prisma.doctorSpeciality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorSpecialities and only return the `id`
     * const doctorSpecialityWithIdOnly = await prisma.doctorSpeciality.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorSpecialityUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorSpecialityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorSpeciality.
     * @param {DoctorSpecialityUpsertArgs} args - Arguments to update or create a DoctorSpeciality.
     * @example
     * // Update or create a DoctorSpeciality
     * const doctorSpeciality = await prisma.doctorSpeciality.upsert({
     *   create: {
     *     // ... data to create a DoctorSpeciality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSpeciality we want to update
     *   }
     * })
     */
    upsert<T extends DoctorSpecialityUpsertArgs>(args: SelectSubset<T, DoctorSpecialityUpsertArgs<ExtArgs>>): Prisma__DoctorSpecialityClient<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSpecialities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialityCountArgs} args - Arguments to filter DoctorSpecialities to count.
     * @example
     * // Count the number of DoctorSpecialities
     * const count = await prisma.doctorSpeciality.count({
     *   where: {
     *     // ... the filter for the DoctorSpecialities we want to count
     *   }
     * })
    **/
    count<T extends DoctorSpecialityCountArgs>(
      args?: Subset<T, DoctorSpecialityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSpecialityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSpeciality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorSpecialityAggregateArgs>(args: Subset<T, DoctorSpecialityAggregateArgs>): Prisma.PrismaPromise<GetDoctorSpecialityAggregateType<T>>

    /**
     * Group by DoctorSpeciality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorSpecialityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorSpecialityGroupByArgs['orderBy'] }
        : { orderBy?: DoctorSpecialityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorSpecialityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSpecialityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSpeciality model
   */
  readonly fields: DoctorSpecialityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSpeciality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorSpecialityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    speciality<T extends SpecialityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialityDefaultArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorSpeciality model
   */
  interface DoctorSpecialityFieldRefs {
    readonly id: FieldRef<"DoctorSpeciality", 'Int'>
    readonly doctorId: FieldRef<"DoctorSpeciality", 'Int'>
    readonly specialityId: FieldRef<"DoctorSpeciality", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSpeciality findUnique
   */
  export type DoctorSpecialityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpeciality to fetch.
     */
    where: DoctorSpecialityWhereUniqueInput
  }

  /**
   * DoctorSpeciality findUniqueOrThrow
   */
  export type DoctorSpecialityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpeciality to fetch.
     */
    where: DoctorSpecialityWhereUniqueInput
  }

  /**
   * DoctorSpeciality findFirst
   */
  export type DoctorSpecialityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpeciality to fetch.
     */
    where?: DoctorSpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialities to fetch.
     */
    orderBy?: DoctorSpecialityOrderByWithRelationInput | DoctorSpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecialities.
     */
    cursor?: DoctorSpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecialities.
     */
    distinct?: DoctorSpecialityScalarFieldEnum | DoctorSpecialityScalarFieldEnum[]
  }

  /**
   * DoctorSpeciality findFirstOrThrow
   */
  export type DoctorSpecialityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpeciality to fetch.
     */
    where?: DoctorSpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialities to fetch.
     */
    orderBy?: DoctorSpecialityOrderByWithRelationInput | DoctorSpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecialities.
     */
    cursor?: DoctorSpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecialities.
     */
    distinct?: DoctorSpecialityScalarFieldEnum | DoctorSpecialityScalarFieldEnum[]
  }

  /**
   * DoctorSpeciality findMany
   */
  export type DoctorSpecialityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialities to fetch.
     */
    where?: DoctorSpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialities to fetch.
     */
    orderBy?: DoctorSpecialityOrderByWithRelationInput | DoctorSpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSpecialities.
     */
    cursor?: DoctorSpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialities.
     */
    skip?: number
    distinct?: DoctorSpecialityScalarFieldEnum | DoctorSpecialityScalarFieldEnum[]
  }

  /**
   * DoctorSpeciality create
   */
  export type DoctorSpecialityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSpeciality.
     */
    data: XOR<DoctorSpecialityCreateInput, DoctorSpecialityUncheckedCreateInput>
  }

  /**
   * DoctorSpeciality createMany
   */
  export type DoctorSpecialityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSpecialities.
     */
    data: DoctorSpecialityCreateManyInput | DoctorSpecialityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSpeciality createManyAndReturn
   */
  export type DoctorSpecialityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorSpecialities.
     */
    data: DoctorSpecialityCreateManyInput | DoctorSpecialityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSpeciality update
   */
  export type DoctorSpecialityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSpeciality.
     */
    data: XOR<DoctorSpecialityUpdateInput, DoctorSpecialityUncheckedUpdateInput>
    /**
     * Choose, which DoctorSpeciality to update.
     */
    where: DoctorSpecialityWhereUniqueInput
  }

  /**
   * DoctorSpeciality updateMany
   */
  export type DoctorSpecialityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSpecialities.
     */
    data: XOR<DoctorSpecialityUpdateManyMutationInput, DoctorSpecialityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecialities to update
     */
    where?: DoctorSpecialityWhereInput
    /**
     * Limit how many DoctorSpecialities to update.
     */
    limit?: number
  }

  /**
   * DoctorSpeciality updateManyAndReturn
   */
  export type DoctorSpecialityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * The data used to update DoctorSpecialities.
     */
    data: XOR<DoctorSpecialityUpdateManyMutationInput, DoctorSpecialityUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecialities to update
     */
    where?: DoctorSpecialityWhereInput
    /**
     * Limit how many DoctorSpecialities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSpeciality upsert
   */
  export type DoctorSpecialityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSpeciality to update in case it exists.
     */
    where: DoctorSpecialityWhereUniqueInput
    /**
     * In case the DoctorSpeciality found by the `where` argument doesn't exist, create a new DoctorSpeciality with this data.
     */
    create: XOR<DoctorSpecialityCreateInput, DoctorSpecialityUncheckedCreateInput>
    /**
     * In case the DoctorSpeciality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorSpecialityUpdateInput, DoctorSpecialityUncheckedUpdateInput>
  }

  /**
   * DoctorSpeciality delete
   */
  export type DoctorSpecialityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    /**
     * Filter which DoctorSpeciality to delete.
     */
    where: DoctorSpecialityWhereUniqueInput
  }

  /**
   * DoctorSpeciality deleteMany
   */
  export type DoctorSpecialityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecialities to delete
     */
    where?: DoctorSpecialityWhereInput
    /**
     * Limit how many DoctorSpecialities to delete.
     */
    limit?: number
  }

  /**
   * DoctorSpeciality without action
   */
  export type DoctorSpecialityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
  }


  /**
   * Model Speciality
   */

  export type AggregateSpeciality = {
    _count: SpecialityCountAggregateOutputType | null
    _avg: SpecialityAvgAggregateOutputType | null
    _sum: SpecialitySumAggregateOutputType | null
    _min: SpecialityMinAggregateOutputType | null
    _max: SpecialityMaxAggregateOutputType | null
  }

  export type SpecialityAvgAggregateOutputType = {
    code: number | null
  }

  export type SpecialitySumAggregateOutputType = {
    code: number | null
  }

  export type SpecialityMinAggregateOutputType = {
    code: number | null
    name: string | null
    description: string | null
  }

  export type SpecialityMaxAggregateOutputType = {
    code: number | null
    name: string | null
    description: string | null
  }

  export type SpecialityCountAggregateOutputType = {
    code: number
    name: number
    description: number
    _all: number
  }


  export type SpecialityAvgAggregateInputType = {
    code?: true
  }

  export type SpecialitySumAggregateInputType = {
    code?: true
  }

  export type SpecialityMinAggregateInputType = {
    code?: true
    name?: true
    description?: true
  }

  export type SpecialityMaxAggregateInputType = {
    code?: true
    name?: true
    description?: true
  }

  export type SpecialityCountAggregateInputType = {
    code?: true
    name?: true
    description?: true
    _all?: true
  }

  export type SpecialityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Speciality to aggregate.
     */
    where?: SpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialities to fetch.
     */
    orderBy?: SpecialityOrderByWithRelationInput | SpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialities
    **/
    _count?: true | SpecialityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialityMaxAggregateInputType
  }

  export type GetSpecialityAggregateType<T extends SpecialityAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeciality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeciality[P]>
      : GetScalarType<T[P], AggregateSpeciality[P]>
  }




  export type SpecialityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialityWhereInput
    orderBy?: SpecialityOrderByWithAggregationInput | SpecialityOrderByWithAggregationInput[]
    by: SpecialityScalarFieldEnum[] | SpecialityScalarFieldEnum
    having?: SpecialityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialityCountAggregateInputType | true
    _avg?: SpecialityAvgAggregateInputType
    _sum?: SpecialitySumAggregateInputType
    _min?: SpecialityMinAggregateInputType
    _max?: SpecialityMaxAggregateInputType
  }

  export type SpecialityGroupByOutputType = {
    code: number
    name: string
    description: string
    _count: SpecialityCountAggregateOutputType | null
    _avg: SpecialityAvgAggregateOutputType | null
    _sum: SpecialitySumAggregateOutputType | null
    _min: SpecialityMinAggregateOutputType | null
    _max: SpecialityMaxAggregateOutputType | null
  }

  type GetSpecialityGroupByPayload<T extends SpecialityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialityGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialityGroupByOutputType[P]>
        }
      >
    >


  export type SpecialitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    description?: boolean
    doctorSpecialities?: boolean | Speciality$doctorSpecialitiesArgs<ExtArgs>
    _count?: boolean | SpecialityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["speciality"]>

  export type SpecialitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["speciality"]>

  export type SpecialitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["speciality"]>

  export type SpecialitySelectScalar = {
    code?: boolean
    name?: boolean
    description?: boolean
  }

  export type SpecialityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "name" | "description", ExtArgs["result"]["speciality"]>
  export type SpecialityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialities?: boolean | Speciality$doctorSpecialitiesArgs<ExtArgs>
    _count?: boolean | SpecialityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Speciality"
    objects: {
      doctorSpecialities: Prisma.$DoctorSpecialityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: number
      name: string
      description: string
    }, ExtArgs["result"]["speciality"]>
    composites: {}
  }

  type SpecialityGetPayload<S extends boolean | null | undefined | SpecialityDefaultArgs> = $Result.GetResult<Prisma.$SpecialityPayload, S>

  type SpecialityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialityCountAggregateInputType | true
    }

  export interface SpecialityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Speciality'], meta: { name: 'Speciality' } }
    /**
     * Find zero or one Speciality that matches the filter.
     * @param {SpecialityFindUniqueArgs} args - Arguments to find a Speciality
     * @example
     * // Get one Speciality
     * const speciality = await prisma.speciality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialityFindUniqueArgs>(args: SelectSubset<T, SpecialityFindUniqueArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Speciality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialityFindUniqueOrThrowArgs} args - Arguments to find a Speciality
     * @example
     * // Get one Speciality
     * const speciality = await prisma.speciality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialityFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Speciality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityFindFirstArgs} args - Arguments to find a Speciality
     * @example
     * // Get one Speciality
     * const speciality = await prisma.speciality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialityFindFirstArgs>(args?: SelectSubset<T, SpecialityFindFirstArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Speciality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityFindFirstOrThrowArgs} args - Arguments to find a Speciality
     * @example
     * // Get one Speciality
     * const speciality = await prisma.speciality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialityFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialities
     * const specialities = await prisma.speciality.findMany()
     * 
     * // Get first 10 Specialities
     * const specialities = await prisma.speciality.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const specialityWithCodeOnly = await prisma.speciality.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends SpecialityFindManyArgs>(args?: SelectSubset<T, SpecialityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Speciality.
     * @param {SpecialityCreateArgs} args - Arguments to create a Speciality.
     * @example
     * // Create one Speciality
     * const Speciality = await prisma.speciality.create({
     *   data: {
     *     // ... data to create a Speciality
     *   }
     * })
     * 
     */
    create<T extends SpecialityCreateArgs>(args: SelectSubset<T, SpecialityCreateArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialities.
     * @param {SpecialityCreateManyArgs} args - Arguments to create many Specialities.
     * @example
     * // Create many Specialities
     * const speciality = await prisma.speciality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialityCreateManyArgs>(args?: SelectSubset<T, SpecialityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialities and returns the data saved in the database.
     * @param {SpecialityCreateManyAndReturnArgs} args - Arguments to create many Specialities.
     * @example
     * // Create many Specialities
     * const speciality = await prisma.speciality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialities and only return the `code`
     * const specialityWithCodeOnly = await prisma.speciality.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialityCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Speciality.
     * @param {SpecialityDeleteArgs} args - Arguments to delete one Speciality.
     * @example
     * // Delete one Speciality
     * const Speciality = await prisma.speciality.delete({
     *   where: {
     *     // ... filter to delete one Speciality
     *   }
     * })
     * 
     */
    delete<T extends SpecialityDeleteArgs>(args: SelectSubset<T, SpecialityDeleteArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Speciality.
     * @param {SpecialityUpdateArgs} args - Arguments to update one Speciality.
     * @example
     * // Update one Speciality
     * const speciality = await prisma.speciality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialityUpdateArgs>(args: SelectSubset<T, SpecialityUpdateArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialities.
     * @param {SpecialityDeleteManyArgs} args - Arguments to filter Specialities to delete.
     * @example
     * // Delete a few Specialities
     * const { count } = await prisma.speciality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialityDeleteManyArgs>(args?: SelectSubset<T, SpecialityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialities
     * const speciality = await prisma.speciality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialityUpdateManyArgs>(args: SelectSubset<T, SpecialityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialities and returns the data updated in the database.
     * @param {SpecialityUpdateManyAndReturnArgs} args - Arguments to update many Specialities.
     * @example
     * // Update many Specialities
     * const speciality = await prisma.speciality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialities and only return the `code`
     * const specialityWithCodeOnly = await prisma.speciality.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialityUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Speciality.
     * @param {SpecialityUpsertArgs} args - Arguments to update or create a Speciality.
     * @example
     * // Update or create a Speciality
     * const speciality = await prisma.speciality.upsert({
     *   create: {
     *     // ... data to create a Speciality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Speciality we want to update
     *   }
     * })
     */
    upsert<T extends SpecialityUpsertArgs>(args: SelectSubset<T, SpecialityUpsertArgs<ExtArgs>>): Prisma__SpecialityClient<$Result.GetResult<Prisma.$SpecialityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityCountArgs} args - Arguments to filter Specialities to count.
     * @example
     * // Count the number of Specialities
     * const count = await prisma.speciality.count({
     *   where: {
     *     // ... the filter for the Specialities we want to count
     *   }
     * })
    **/
    count<T extends SpecialityCountArgs>(
      args?: Subset<T, SpecialityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Speciality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialityAggregateArgs>(args: Subset<T, SpecialityAggregateArgs>): Prisma.PrismaPromise<GetSpecialityAggregateType<T>>

    /**
     * Group by Speciality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialityGroupByArgs['orderBy'] }
        : { orderBy?: SpecialityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Speciality model
   */
  readonly fields: SpecialityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Speciality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorSpecialities<T extends Speciality$doctorSpecialitiesArgs<ExtArgs> = {}>(args?: Subset<T, Speciality$doctorSpecialitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Speciality model
   */
  interface SpecialityFieldRefs {
    readonly code: FieldRef<"Speciality", 'Int'>
    readonly name: FieldRef<"Speciality", 'String'>
    readonly description: FieldRef<"Speciality", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Speciality findUnique
   */
  export type SpecialityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter, which Speciality to fetch.
     */
    where: SpecialityWhereUniqueInput
  }

  /**
   * Speciality findUniqueOrThrow
   */
  export type SpecialityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter, which Speciality to fetch.
     */
    where: SpecialityWhereUniqueInput
  }

  /**
   * Speciality findFirst
   */
  export type SpecialityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter, which Speciality to fetch.
     */
    where?: SpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialities to fetch.
     */
    orderBy?: SpecialityOrderByWithRelationInput | SpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialities.
     */
    cursor?: SpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialities.
     */
    distinct?: SpecialityScalarFieldEnum | SpecialityScalarFieldEnum[]
  }

  /**
   * Speciality findFirstOrThrow
   */
  export type SpecialityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter, which Speciality to fetch.
     */
    where?: SpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialities to fetch.
     */
    orderBy?: SpecialityOrderByWithRelationInput | SpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialities.
     */
    cursor?: SpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialities.
     */
    distinct?: SpecialityScalarFieldEnum | SpecialityScalarFieldEnum[]
  }

  /**
   * Speciality findMany
   */
  export type SpecialityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter, which Specialities to fetch.
     */
    where?: SpecialityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialities to fetch.
     */
    orderBy?: SpecialityOrderByWithRelationInput | SpecialityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialities.
     */
    cursor?: SpecialityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialities.
     */
    skip?: number
    distinct?: SpecialityScalarFieldEnum | SpecialityScalarFieldEnum[]
  }

  /**
   * Speciality create
   */
  export type SpecialityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * The data needed to create a Speciality.
     */
    data: XOR<SpecialityCreateInput, SpecialityUncheckedCreateInput>
  }

  /**
   * Speciality createMany
   */
  export type SpecialityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialities.
     */
    data: SpecialityCreateManyInput | SpecialityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Speciality createManyAndReturn
   */
  export type SpecialityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * The data used to create many Specialities.
     */
    data: SpecialityCreateManyInput | SpecialityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Speciality update
   */
  export type SpecialityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * The data needed to update a Speciality.
     */
    data: XOR<SpecialityUpdateInput, SpecialityUncheckedUpdateInput>
    /**
     * Choose, which Speciality to update.
     */
    where: SpecialityWhereUniqueInput
  }

  /**
   * Speciality updateMany
   */
  export type SpecialityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialities.
     */
    data: XOR<SpecialityUpdateManyMutationInput, SpecialityUncheckedUpdateManyInput>
    /**
     * Filter which Specialities to update
     */
    where?: SpecialityWhereInput
    /**
     * Limit how many Specialities to update.
     */
    limit?: number
  }

  /**
   * Speciality updateManyAndReturn
   */
  export type SpecialityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * The data used to update Specialities.
     */
    data: XOR<SpecialityUpdateManyMutationInput, SpecialityUncheckedUpdateManyInput>
    /**
     * Filter which Specialities to update
     */
    where?: SpecialityWhereInput
    /**
     * Limit how many Specialities to update.
     */
    limit?: number
  }

  /**
   * Speciality upsert
   */
  export type SpecialityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * The filter to search for the Speciality to update in case it exists.
     */
    where: SpecialityWhereUniqueInput
    /**
     * In case the Speciality found by the `where` argument doesn't exist, create a new Speciality with this data.
     */
    create: XOR<SpecialityCreateInput, SpecialityUncheckedCreateInput>
    /**
     * In case the Speciality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialityUpdateInput, SpecialityUncheckedUpdateInput>
  }

  /**
   * Speciality delete
   */
  export type SpecialityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
    /**
     * Filter which Speciality to delete.
     */
    where: SpecialityWhereUniqueInput
  }

  /**
   * Speciality deleteMany
   */
  export type SpecialityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialities to delete
     */
    where?: SpecialityWhereInput
    /**
     * Limit how many Specialities to delete.
     */
    limit?: number
  }

  /**
   * Speciality.doctorSpecialities
   */
  export type Speciality$doctorSpecialitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpeciality
     */
    select?: DoctorSpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpeciality
     */
    omit?: DoctorSpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialityInclude<ExtArgs> | null
    where?: DoctorSpecialityWhereInput
    orderBy?: DoctorSpecialityOrderByWithRelationInput | DoctorSpecialityOrderByWithRelationInput[]
    cursor?: DoctorSpecialityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSpecialityScalarFieldEnum | DoctorSpecialityScalarFieldEnum[]
  }

  /**
   * Speciality without action
   */
  export type SpecialityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Speciality
     */
    select?: SpecialitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Speciality
     */
    omit?: SpecialityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    doctorId: number | null
    patientId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    date: Date | null
    reason: string | null
    state: $Enums.AppointmentState | null
    doctorId: number | null
    patientId: number | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    reason: string | null
    state: $Enums.AppointmentState | null
    doctorId: number | null
    patientId: number | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    date: number
    reason: number
    state: number
    doctorId: number
    patientId: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    date?: true
    reason?: true
    state?: true
    doctorId?: true
    patientId?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    date?: true
    reason?: true
    state?: true
    doctorId?: true
    patientId?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    date?: true
    reason?: true
    state?: true
    doctorId?: true
    patientId?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    date: Date
    reason: string
    state: $Enums.AppointmentState
    doctorId: number
    patientId: number
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    reason?: boolean
    state?: boolean
    doctorId?: boolean
    patientId?: boolean
    consult?: boolean | Appointment$consultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    reason?: boolean
    state?: boolean
    doctorId?: boolean
    patientId?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    reason?: boolean
    state?: boolean
    doctorId?: boolean
    patientId?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    date?: boolean
    reason?: boolean
    state?: boolean
    doctorId?: boolean
    patientId?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "reason" | "state" | "doctorId" | "patientId", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consult?: boolean | Appointment$consultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      consult: Prisma.$ConsultPayload<ExtArgs> | null
      doctor: Prisma.$DoctorPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      reason: string
      state: $Enums.AppointmentState
      doctorId: number
      patientId: number
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consult<T extends Appointment$consultArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$consultArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly reason: FieldRef<"Appointment", 'String'>
    readonly state: FieldRef<"Appointment", 'AppointmentState'>
    readonly doctorId: FieldRef<"Appointment", 'Int'>
    readonly patientId: FieldRef<"Appointment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.consult
   */
  export type Appointment$consultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    where?: ConsultWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Consult
   */

  export type AggregateConsult = {
    _count: ConsultCountAggregateOutputType | null
    _avg: ConsultAvgAggregateOutputType | null
    _sum: ConsultSumAggregateOutputType | null
    _min: ConsultMinAggregateOutputType | null
    _max: ConsultMaxAggregateOutputType | null
  }

  export type ConsultAvgAggregateOutputType = {
    id: number | null
    appointmentId: number | null
    treatmentId: number | null
  }

  export type ConsultSumAggregateOutputType = {
    id: number | null
    appointmentId: number | null
    treatmentId: number | null
  }

  export type ConsultMinAggregateOutputType = {
    id: number | null
    diagnosis: string | null
    observations: string | null
    appointmentId: number | null
    treatmentId: number | null
  }

  export type ConsultMaxAggregateOutputType = {
    id: number | null
    diagnosis: string | null
    observations: string | null
    appointmentId: number | null
    treatmentId: number | null
  }

  export type ConsultCountAggregateOutputType = {
    id: number
    diagnosis: number
    observations: number
    appointmentId: number
    treatmentId: number
    _all: number
  }


  export type ConsultAvgAggregateInputType = {
    id?: true
    appointmentId?: true
    treatmentId?: true
  }

  export type ConsultSumAggregateInputType = {
    id?: true
    appointmentId?: true
    treatmentId?: true
  }

  export type ConsultMinAggregateInputType = {
    id?: true
    diagnosis?: true
    observations?: true
    appointmentId?: true
    treatmentId?: true
  }

  export type ConsultMaxAggregateInputType = {
    id?: true
    diagnosis?: true
    observations?: true
    appointmentId?: true
    treatmentId?: true
  }

  export type ConsultCountAggregateInputType = {
    id?: true
    diagnosis?: true
    observations?: true
    appointmentId?: true
    treatmentId?: true
    _all?: true
  }

  export type ConsultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consult to aggregate.
     */
    where?: ConsultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consults to fetch.
     */
    orderBy?: ConsultOrderByWithRelationInput | ConsultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consults
    **/
    _count?: true | ConsultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultMaxAggregateInputType
  }

  export type GetConsultAggregateType<T extends ConsultAggregateArgs> = {
        [P in keyof T & keyof AggregateConsult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsult[P]>
      : GetScalarType<T[P], AggregateConsult[P]>
  }




  export type ConsultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultWhereInput
    orderBy?: ConsultOrderByWithAggregationInput | ConsultOrderByWithAggregationInput[]
    by: ConsultScalarFieldEnum[] | ConsultScalarFieldEnum
    having?: ConsultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultCountAggregateInputType | true
    _avg?: ConsultAvgAggregateInputType
    _sum?: ConsultSumAggregateInputType
    _min?: ConsultMinAggregateInputType
    _max?: ConsultMaxAggregateInputType
  }

  export type ConsultGroupByOutputType = {
    id: number
    diagnosis: string
    observations: string
    appointmentId: number
    treatmentId: number
    _count: ConsultCountAggregateOutputType | null
    _avg: ConsultAvgAggregateOutputType | null
    _sum: ConsultSumAggregateOutputType | null
    _min: ConsultMinAggregateOutputType | null
    _max: ConsultMaxAggregateOutputType | null
  }

  type GetConsultGroupByPayload<T extends ConsultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultGroupByOutputType[P]>
        }
      >
    >


  export type ConsultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    observations?: boolean
    appointmentId?: boolean
    treatmentId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consult"]>

  export type ConsultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    observations?: boolean
    appointmentId?: boolean
    treatmentId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consult"]>

  export type ConsultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnosis?: boolean
    observations?: boolean
    appointmentId?: boolean
    treatmentId?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consult"]>

  export type ConsultSelectScalar = {
    id?: boolean
    diagnosis?: boolean
    observations?: boolean
    appointmentId?: boolean
    treatmentId?: boolean
  }

  export type ConsultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diagnosis" | "observations" | "appointmentId" | "treatmentId", ExtArgs["result"]["consult"]>
  export type ConsultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }
  export type ConsultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }
  export type ConsultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }

  export type $ConsultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consult"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      treatment: Prisma.$TreatmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      diagnosis: string
      observations: string
      appointmentId: number
      treatmentId: number
    }, ExtArgs["result"]["consult"]>
    composites: {}
  }

  type ConsultGetPayload<S extends boolean | null | undefined | ConsultDefaultArgs> = $Result.GetResult<Prisma.$ConsultPayload, S>

  type ConsultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultCountAggregateInputType | true
    }

  export interface ConsultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consult'], meta: { name: 'Consult' } }
    /**
     * Find zero or one Consult that matches the filter.
     * @param {ConsultFindUniqueArgs} args - Arguments to find a Consult
     * @example
     * // Get one Consult
     * const consult = await prisma.consult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultFindUniqueArgs>(args: SelectSubset<T, ConsultFindUniqueArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultFindUniqueOrThrowArgs} args - Arguments to find a Consult
     * @example
     * // Get one Consult
     * const consult = await prisma.consult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultFindFirstArgs} args - Arguments to find a Consult
     * @example
     * // Get one Consult
     * const consult = await prisma.consult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultFindFirstArgs>(args?: SelectSubset<T, ConsultFindFirstArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultFindFirstOrThrowArgs} args - Arguments to find a Consult
     * @example
     * // Get one Consult
     * const consult = await prisma.consult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consults
     * const consults = await prisma.consult.findMany()
     * 
     * // Get first 10 Consults
     * const consults = await prisma.consult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultWithIdOnly = await prisma.consult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultFindManyArgs>(args?: SelectSubset<T, ConsultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consult.
     * @param {ConsultCreateArgs} args - Arguments to create a Consult.
     * @example
     * // Create one Consult
     * const Consult = await prisma.consult.create({
     *   data: {
     *     // ... data to create a Consult
     *   }
     * })
     * 
     */
    create<T extends ConsultCreateArgs>(args: SelectSubset<T, ConsultCreateArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consults.
     * @param {ConsultCreateManyArgs} args - Arguments to create many Consults.
     * @example
     * // Create many Consults
     * const consult = await prisma.consult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultCreateManyArgs>(args?: SelectSubset<T, ConsultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consults and returns the data saved in the database.
     * @param {ConsultCreateManyAndReturnArgs} args - Arguments to create many Consults.
     * @example
     * // Create many Consults
     * const consult = await prisma.consult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consults and only return the `id`
     * const consultWithIdOnly = await prisma.consult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consult.
     * @param {ConsultDeleteArgs} args - Arguments to delete one Consult.
     * @example
     * // Delete one Consult
     * const Consult = await prisma.consult.delete({
     *   where: {
     *     // ... filter to delete one Consult
     *   }
     * })
     * 
     */
    delete<T extends ConsultDeleteArgs>(args: SelectSubset<T, ConsultDeleteArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consult.
     * @param {ConsultUpdateArgs} args - Arguments to update one Consult.
     * @example
     * // Update one Consult
     * const consult = await prisma.consult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultUpdateArgs>(args: SelectSubset<T, ConsultUpdateArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consults.
     * @param {ConsultDeleteManyArgs} args - Arguments to filter Consults to delete.
     * @example
     * // Delete a few Consults
     * const { count } = await prisma.consult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultDeleteManyArgs>(args?: SelectSubset<T, ConsultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consults
     * const consult = await prisma.consult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultUpdateManyArgs>(args: SelectSubset<T, ConsultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consults and returns the data updated in the database.
     * @param {ConsultUpdateManyAndReturnArgs} args - Arguments to update many Consults.
     * @example
     * // Update many Consults
     * const consult = await prisma.consult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consults and only return the `id`
     * const consultWithIdOnly = await prisma.consult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consult.
     * @param {ConsultUpsertArgs} args - Arguments to update or create a Consult.
     * @example
     * // Update or create a Consult
     * const consult = await prisma.consult.upsert({
     *   create: {
     *     // ... data to create a Consult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consult we want to update
     *   }
     * })
     */
    upsert<T extends ConsultUpsertArgs>(args: SelectSubset<T, ConsultUpsertArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultCountArgs} args - Arguments to filter Consults to count.
     * @example
     * // Count the number of Consults
     * const count = await prisma.consult.count({
     *   where: {
     *     // ... the filter for the Consults we want to count
     *   }
     * })
    **/
    count<T extends ConsultCountArgs>(
      args?: Subset<T, ConsultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultAggregateArgs>(args: Subset<T, ConsultAggregateArgs>): Prisma.PrismaPromise<GetConsultAggregateType<T>>

    /**
     * Group by Consult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultGroupByArgs['orderBy'] }
        : { orderBy?: ConsultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consult model
   */
  readonly fields: ConsultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    treatment<T extends TreatmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentDefaultArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consult model
   */
  interface ConsultFieldRefs {
    readonly id: FieldRef<"Consult", 'Int'>
    readonly diagnosis: FieldRef<"Consult", 'String'>
    readonly observations: FieldRef<"Consult", 'String'>
    readonly appointmentId: FieldRef<"Consult", 'Int'>
    readonly treatmentId: FieldRef<"Consult", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Consult findUnique
   */
  export type ConsultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    /**
     * Filter, which Consult to fetch.
     */
    where: ConsultWhereUniqueInput
  }

  /**
   * Consult findUniqueOrThrow
   */
  export type ConsultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    /**
     * Filter, which Consult to fetch.
     */
    where: ConsultWhereUniqueInput
  }

  /**
   * Consult findFirst
   */
  export type ConsultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    /**
     * Filter, which Consult to fetch.
     */
    where?: ConsultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consults to fetch.
     */
    orderBy?: ConsultOrderByWithRelationInput | ConsultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consults.
     */
    cursor?: ConsultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consults.
     */
    distinct?: ConsultScalarFieldEnum | ConsultScalarFieldEnum[]
  }

  /**
   * Consult findFirstOrThrow
   */
  export type ConsultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    /**
     * Filter, which Consult to fetch.
     */
    where?: ConsultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consults to fetch.
     */
    orderBy?: ConsultOrderByWithRelationInput | ConsultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consults.
     */
    cursor?: ConsultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consults.
     */
    distinct?: ConsultScalarFieldEnum | ConsultScalarFieldEnum[]
  }

  /**
   * Consult findMany
   */
  export type ConsultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    /**
     * Filter, which Consults to fetch.
     */
    where?: ConsultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consults to fetch.
     */
    orderBy?: ConsultOrderByWithRelationInput | ConsultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consults.
     */
    cursor?: ConsultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consults.
     */
    skip?: number
    distinct?: ConsultScalarFieldEnum | ConsultScalarFieldEnum[]
  }

  /**
   * Consult create
   */
  export type ConsultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    /**
     * The data needed to create a Consult.
     */
    data: XOR<ConsultCreateInput, ConsultUncheckedCreateInput>
  }

  /**
   * Consult createMany
   */
  export type ConsultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consults.
     */
    data: ConsultCreateManyInput | ConsultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consult createManyAndReturn
   */
  export type ConsultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * The data used to create many Consults.
     */
    data: ConsultCreateManyInput | ConsultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consult update
   */
  export type ConsultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    /**
     * The data needed to update a Consult.
     */
    data: XOR<ConsultUpdateInput, ConsultUncheckedUpdateInput>
    /**
     * Choose, which Consult to update.
     */
    where: ConsultWhereUniqueInput
  }

  /**
   * Consult updateMany
   */
  export type ConsultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consults.
     */
    data: XOR<ConsultUpdateManyMutationInput, ConsultUncheckedUpdateManyInput>
    /**
     * Filter which Consults to update
     */
    where?: ConsultWhereInput
    /**
     * Limit how many Consults to update.
     */
    limit?: number
  }

  /**
   * Consult updateManyAndReturn
   */
  export type ConsultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * The data used to update Consults.
     */
    data: XOR<ConsultUpdateManyMutationInput, ConsultUncheckedUpdateManyInput>
    /**
     * Filter which Consults to update
     */
    where?: ConsultWhereInput
    /**
     * Limit how many Consults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consult upsert
   */
  export type ConsultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    /**
     * The filter to search for the Consult to update in case it exists.
     */
    where: ConsultWhereUniqueInput
    /**
     * In case the Consult found by the `where` argument doesn't exist, create a new Consult with this data.
     */
    create: XOR<ConsultCreateInput, ConsultUncheckedCreateInput>
    /**
     * In case the Consult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultUpdateInput, ConsultUncheckedUpdateInput>
  }

  /**
   * Consult delete
   */
  export type ConsultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    /**
     * Filter which Consult to delete.
     */
    where: ConsultWhereUniqueInput
  }

  /**
   * Consult deleteMany
   */
  export type ConsultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consults to delete
     */
    where?: ConsultWhereInput
    /**
     * Limit how many Consults to delete.
     */
    limit?: number
  }

  /**
   * Consult without action
   */
  export type ConsultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
  }


  /**
   * Model Treatment
   */

  export type AggregateTreatment = {
    _count: TreatmentCountAggregateOutputType | null
    _avg: TreatmentAvgAggregateOutputType | null
    _sum: TreatmentSumAggregateOutputType | null
    _min: TreatmentMinAggregateOutputType | null
    _max: TreatmentMaxAggregateOutputType | null
  }

  export type TreatmentAvgAggregateOutputType = {
    id: number | null
    dose: Decimal | null
    frequency: number | null
    duration: number | null
  }

  export type TreatmentSumAggregateOutputType = {
    id: number | null
    dose: Decimal | null
    frequency: number | null
    duration: number | null
  }

  export type TreatmentMinAggregateOutputType = {
    id: number | null
    dose: Decimal | null
    frequency: number | null
    frequencyUnit: $Enums.TimeUnit | null
    duration: number | null
    durationUnit: $Enums.TimeUnit | null
    observations: string | null
  }

  export type TreatmentMaxAggregateOutputType = {
    id: number | null
    dose: Decimal | null
    frequency: number | null
    frequencyUnit: $Enums.TimeUnit | null
    duration: number | null
    durationUnit: $Enums.TimeUnit | null
    observations: string | null
  }

  export type TreatmentCountAggregateOutputType = {
    id: number
    dose: number
    frequency: number
    frequencyUnit: number
    duration: number
    durationUnit: number
    observations: number
    _all: number
  }


  export type TreatmentAvgAggregateInputType = {
    id?: true
    dose?: true
    frequency?: true
    duration?: true
  }

  export type TreatmentSumAggregateInputType = {
    id?: true
    dose?: true
    frequency?: true
    duration?: true
  }

  export type TreatmentMinAggregateInputType = {
    id?: true
    dose?: true
    frequency?: true
    frequencyUnit?: true
    duration?: true
    durationUnit?: true
    observations?: true
  }

  export type TreatmentMaxAggregateInputType = {
    id?: true
    dose?: true
    frequency?: true
    frequencyUnit?: true
    duration?: true
    durationUnit?: true
    observations?: true
  }

  export type TreatmentCountAggregateInputType = {
    id?: true
    dose?: true
    frequency?: true
    frequencyUnit?: true
    duration?: true
    durationUnit?: true
    observations?: true
    _all?: true
  }

  export type TreatmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treatment to aggregate.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Treatments
    **/
    _count?: true | TreatmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreatmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreatmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentMaxAggregateInputType
  }

  export type GetTreatmentAggregateType<T extends TreatmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatment[P]>
      : GetScalarType<T[P], AggregateTreatment[P]>
  }




  export type TreatmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentWhereInput
    orderBy?: TreatmentOrderByWithAggregationInput | TreatmentOrderByWithAggregationInput[]
    by: TreatmentScalarFieldEnum[] | TreatmentScalarFieldEnum
    having?: TreatmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentCountAggregateInputType | true
    _avg?: TreatmentAvgAggregateInputType
    _sum?: TreatmentSumAggregateInputType
    _min?: TreatmentMinAggregateInputType
    _max?: TreatmentMaxAggregateInputType
  }

  export type TreatmentGroupByOutputType = {
    id: number
    dose: Decimal
    frequency: number
    frequencyUnit: $Enums.TimeUnit
    duration: number
    durationUnit: $Enums.TimeUnit
    observations: string
    _count: TreatmentCountAggregateOutputType | null
    _avg: TreatmentAvgAggregateOutputType | null
    _sum: TreatmentSumAggregateOutputType | null
    _min: TreatmentMinAggregateOutputType | null
    _max: TreatmentMaxAggregateOutputType | null
  }

  type GetTreatmentGroupByPayload<T extends TreatmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dose?: boolean
    frequency?: boolean
    frequencyUnit?: boolean
    duration?: boolean
    durationUnit?: boolean
    observations?: boolean
    consult?: boolean | Treatment$consultArgs<ExtArgs>
    treatmentMedicine?: boolean | Treatment$treatmentMedicineArgs<ExtArgs>
    _count?: boolean | TreatmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatment"]>

  export type TreatmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dose?: boolean
    frequency?: boolean
    frequencyUnit?: boolean
    duration?: boolean
    durationUnit?: boolean
    observations?: boolean
  }, ExtArgs["result"]["treatment"]>

  export type TreatmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dose?: boolean
    frequency?: boolean
    frequencyUnit?: boolean
    duration?: boolean
    durationUnit?: boolean
    observations?: boolean
  }, ExtArgs["result"]["treatment"]>

  export type TreatmentSelectScalar = {
    id?: boolean
    dose?: boolean
    frequency?: boolean
    frequencyUnit?: boolean
    duration?: boolean
    durationUnit?: boolean
    observations?: boolean
  }

  export type TreatmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dose" | "frequency" | "frequencyUnit" | "duration" | "durationUnit" | "observations", ExtArgs["result"]["treatment"]>
  export type TreatmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consult?: boolean | Treatment$consultArgs<ExtArgs>
    treatmentMedicine?: boolean | Treatment$treatmentMedicineArgs<ExtArgs>
    _count?: boolean | TreatmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TreatmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TreatmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TreatmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Treatment"
    objects: {
      consult: Prisma.$ConsultPayload<ExtArgs> | null
      treatmentMedicine: Prisma.$TreatmentMedicinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dose: Prisma.Decimal
      frequency: number
      frequencyUnit: $Enums.TimeUnit
      duration: number
      durationUnit: $Enums.TimeUnit
      observations: string
    }, ExtArgs["result"]["treatment"]>
    composites: {}
  }

  type TreatmentGetPayload<S extends boolean | null | undefined | TreatmentDefaultArgs> = $Result.GetResult<Prisma.$TreatmentPayload, S>

  type TreatmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreatmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreatmentCountAggregateInputType | true
    }

  export interface TreatmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Treatment'], meta: { name: 'Treatment' } }
    /**
     * Find zero or one Treatment that matches the filter.
     * @param {TreatmentFindUniqueArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentFindUniqueArgs>(args: SelectSubset<T, TreatmentFindUniqueArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Treatment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreatmentFindUniqueOrThrowArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treatment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindFirstArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentFindFirstArgs>(args?: SelectSubset<T, TreatmentFindFirstArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treatment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindFirstOrThrowArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Treatments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Treatments
     * const treatments = await prisma.treatment.findMany()
     * 
     * // Get first 10 Treatments
     * const treatments = await prisma.treatment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treatmentWithIdOnly = await prisma.treatment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreatmentFindManyArgs>(args?: SelectSubset<T, TreatmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Treatment.
     * @param {TreatmentCreateArgs} args - Arguments to create a Treatment.
     * @example
     * // Create one Treatment
     * const Treatment = await prisma.treatment.create({
     *   data: {
     *     // ... data to create a Treatment
     *   }
     * })
     * 
     */
    create<T extends TreatmentCreateArgs>(args: SelectSubset<T, TreatmentCreateArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Treatments.
     * @param {TreatmentCreateManyArgs} args - Arguments to create many Treatments.
     * @example
     * // Create many Treatments
     * const treatment = await prisma.treatment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentCreateManyArgs>(args?: SelectSubset<T, TreatmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Treatments and returns the data saved in the database.
     * @param {TreatmentCreateManyAndReturnArgs} args - Arguments to create many Treatments.
     * @example
     * // Create many Treatments
     * const treatment = await prisma.treatment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Treatments and only return the `id`
     * const treatmentWithIdOnly = await prisma.treatment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreatmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TreatmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Treatment.
     * @param {TreatmentDeleteArgs} args - Arguments to delete one Treatment.
     * @example
     * // Delete one Treatment
     * const Treatment = await prisma.treatment.delete({
     *   where: {
     *     // ... filter to delete one Treatment
     *   }
     * })
     * 
     */
    delete<T extends TreatmentDeleteArgs>(args: SelectSubset<T, TreatmentDeleteArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Treatment.
     * @param {TreatmentUpdateArgs} args - Arguments to update one Treatment.
     * @example
     * // Update one Treatment
     * const treatment = await prisma.treatment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentUpdateArgs>(args: SelectSubset<T, TreatmentUpdateArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Treatments.
     * @param {TreatmentDeleteManyArgs} args - Arguments to filter Treatments to delete.
     * @example
     * // Delete a few Treatments
     * const { count } = await prisma.treatment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentDeleteManyArgs>(args?: SelectSubset<T, TreatmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Treatments
     * const treatment = await prisma.treatment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentUpdateManyArgs>(args: SelectSubset<T, TreatmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treatments and returns the data updated in the database.
     * @param {TreatmentUpdateManyAndReturnArgs} args - Arguments to update many Treatments.
     * @example
     * // Update many Treatments
     * const treatment = await prisma.treatment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Treatments and only return the `id`
     * const treatmentWithIdOnly = await prisma.treatment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TreatmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TreatmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Treatment.
     * @param {TreatmentUpsertArgs} args - Arguments to update or create a Treatment.
     * @example
     * // Update or create a Treatment
     * const treatment = await prisma.treatment.upsert({
     *   create: {
     *     // ... data to create a Treatment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Treatment we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentUpsertArgs>(args: SelectSubset<T, TreatmentUpsertArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCountArgs} args - Arguments to filter Treatments to count.
     * @example
     * // Count the number of Treatments
     * const count = await prisma.treatment.count({
     *   where: {
     *     // ... the filter for the Treatments we want to count
     *   }
     * })
    **/
    count<T extends TreatmentCountArgs>(
      args?: Subset<T, TreatmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Treatment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreatmentAggregateArgs>(args: Subset<T, TreatmentAggregateArgs>): Prisma.PrismaPromise<GetTreatmentAggregateType<T>>

    /**
     * Group by Treatment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreatmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreatmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Treatment model
   */
  readonly fields: TreatmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Treatment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consult<T extends Treatment$consultArgs<ExtArgs> = {}>(args?: Subset<T, Treatment$consultArgs<ExtArgs>>): Prisma__ConsultClient<$Result.GetResult<Prisma.$ConsultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    treatmentMedicine<T extends Treatment$treatmentMedicineArgs<ExtArgs> = {}>(args?: Subset<T, Treatment$treatmentMedicineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Treatment model
   */
  interface TreatmentFieldRefs {
    readonly id: FieldRef<"Treatment", 'Int'>
    readonly dose: FieldRef<"Treatment", 'Decimal'>
    readonly frequency: FieldRef<"Treatment", 'Int'>
    readonly frequencyUnit: FieldRef<"Treatment", 'TimeUnit'>
    readonly duration: FieldRef<"Treatment", 'Int'>
    readonly durationUnit: FieldRef<"Treatment", 'TimeUnit'>
    readonly observations: FieldRef<"Treatment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Treatment findUnique
   */
  export type TreatmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment findUniqueOrThrow
   */
  export type TreatmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment findFirst
   */
  export type TreatmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treatments.
     */
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment findFirstOrThrow
   */
  export type TreatmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treatments.
     */
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment findMany
   */
  export type TreatmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatments to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment create
   */
  export type TreatmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Treatment.
     */
    data: XOR<TreatmentCreateInput, TreatmentUncheckedCreateInput>
  }

  /**
   * Treatment createMany
   */
  export type TreatmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Treatments.
     */
    data: TreatmentCreateManyInput | TreatmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Treatment createManyAndReturn
   */
  export type TreatmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * The data used to create many Treatments.
     */
    data: TreatmentCreateManyInput | TreatmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Treatment update
   */
  export type TreatmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Treatment.
     */
    data: XOR<TreatmentUpdateInput, TreatmentUncheckedUpdateInput>
    /**
     * Choose, which Treatment to update.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment updateMany
   */
  export type TreatmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Treatments.
     */
    data: XOR<TreatmentUpdateManyMutationInput, TreatmentUncheckedUpdateManyInput>
    /**
     * Filter which Treatments to update
     */
    where?: TreatmentWhereInput
    /**
     * Limit how many Treatments to update.
     */
    limit?: number
  }

  /**
   * Treatment updateManyAndReturn
   */
  export type TreatmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * The data used to update Treatments.
     */
    data: XOR<TreatmentUpdateManyMutationInput, TreatmentUncheckedUpdateManyInput>
    /**
     * Filter which Treatments to update
     */
    where?: TreatmentWhereInput
    /**
     * Limit how many Treatments to update.
     */
    limit?: number
  }

  /**
   * Treatment upsert
   */
  export type TreatmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Treatment to update in case it exists.
     */
    where: TreatmentWhereUniqueInput
    /**
     * In case the Treatment found by the `where` argument doesn't exist, create a new Treatment with this data.
     */
    create: XOR<TreatmentCreateInput, TreatmentUncheckedCreateInput>
    /**
     * In case the Treatment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentUpdateInput, TreatmentUncheckedUpdateInput>
  }

  /**
   * Treatment delete
   */
  export type TreatmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter which Treatment to delete.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment deleteMany
   */
  export type TreatmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treatments to delete
     */
    where?: TreatmentWhereInput
    /**
     * Limit how many Treatments to delete.
     */
    limit?: number
  }

  /**
   * Treatment.consult
   */
  export type Treatment$consultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consult
     */
    select?: ConsultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consult
     */
    omit?: ConsultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultInclude<ExtArgs> | null
    where?: ConsultWhereInput
  }

  /**
   * Treatment.treatmentMedicine
   */
  export type Treatment$treatmentMedicineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    where?: TreatmentMedicineWhereInput
    orderBy?: TreatmentMedicineOrderByWithRelationInput | TreatmentMedicineOrderByWithRelationInput[]
    cursor?: TreatmentMedicineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentMedicineScalarFieldEnum | TreatmentMedicineScalarFieldEnum[]
  }

  /**
   * Treatment without action
   */
  export type TreatmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
  }


  /**
   * Model TreatmentMedicine
   */

  export type AggregateTreatmentMedicine = {
    _count: TreatmentMedicineCountAggregateOutputType | null
    _avg: TreatmentMedicineAvgAggregateOutputType | null
    _sum: TreatmentMedicineSumAggregateOutputType | null
    _min: TreatmentMedicineMinAggregateOutputType | null
    _max: TreatmentMedicineMaxAggregateOutputType | null
  }

  export type TreatmentMedicineAvgAggregateOutputType = {
    id: number | null
    treatmentId: number | null
    medicineId: number | null
  }

  export type TreatmentMedicineSumAggregateOutputType = {
    id: number | null
    treatmentId: number | null
    medicineId: number | null
  }

  export type TreatmentMedicineMinAggregateOutputType = {
    id: number | null
    treatmentId: number | null
    medicineId: number | null
  }

  export type TreatmentMedicineMaxAggregateOutputType = {
    id: number | null
    treatmentId: number | null
    medicineId: number | null
  }

  export type TreatmentMedicineCountAggregateOutputType = {
    id: number
    treatmentId: number
    medicineId: number
    _all: number
  }


  export type TreatmentMedicineAvgAggregateInputType = {
    id?: true
    treatmentId?: true
    medicineId?: true
  }

  export type TreatmentMedicineSumAggregateInputType = {
    id?: true
    treatmentId?: true
    medicineId?: true
  }

  export type TreatmentMedicineMinAggregateInputType = {
    id?: true
    treatmentId?: true
    medicineId?: true
  }

  export type TreatmentMedicineMaxAggregateInputType = {
    id?: true
    treatmentId?: true
    medicineId?: true
  }

  export type TreatmentMedicineCountAggregateInputType = {
    id?: true
    treatmentId?: true
    medicineId?: true
    _all?: true
  }

  export type TreatmentMedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentMedicine to aggregate.
     */
    where?: TreatmentMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentMedicines to fetch.
     */
    orderBy?: TreatmentMedicineOrderByWithRelationInput | TreatmentMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreatmentMedicines
    **/
    _count?: true | TreatmentMedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreatmentMedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreatmentMedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentMedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentMedicineMaxAggregateInputType
  }

  export type GetTreatmentMedicineAggregateType<T extends TreatmentMedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatmentMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatmentMedicine[P]>
      : GetScalarType<T[P], AggregateTreatmentMedicine[P]>
  }




  export type TreatmentMedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentMedicineWhereInput
    orderBy?: TreatmentMedicineOrderByWithAggregationInput | TreatmentMedicineOrderByWithAggregationInput[]
    by: TreatmentMedicineScalarFieldEnum[] | TreatmentMedicineScalarFieldEnum
    having?: TreatmentMedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentMedicineCountAggregateInputType | true
    _avg?: TreatmentMedicineAvgAggregateInputType
    _sum?: TreatmentMedicineSumAggregateInputType
    _min?: TreatmentMedicineMinAggregateInputType
    _max?: TreatmentMedicineMaxAggregateInputType
  }

  export type TreatmentMedicineGroupByOutputType = {
    id: number
    treatmentId: number
    medicineId: number
    _count: TreatmentMedicineCountAggregateOutputType | null
    _avg: TreatmentMedicineAvgAggregateOutputType | null
    _sum: TreatmentMedicineSumAggregateOutputType | null
    _min: TreatmentMedicineMinAggregateOutputType | null
    _max: TreatmentMedicineMaxAggregateOutputType | null
  }

  type GetTreatmentMedicineGroupByPayload<T extends TreatmentMedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentMedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentMedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentMedicineGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentMedicineGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentMedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treatmentId?: boolean
    medicineId?: boolean
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentMedicine"]>

  export type TreatmentMedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treatmentId?: boolean
    medicineId?: boolean
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentMedicine"]>

  export type TreatmentMedicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treatmentId?: boolean
    medicineId?: boolean
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentMedicine"]>

  export type TreatmentMedicineSelectScalar = {
    id?: boolean
    treatmentId?: boolean
    medicineId?: boolean
  }

  export type TreatmentMedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "treatmentId" | "medicineId", ExtArgs["result"]["treatmentMedicine"]>
  export type TreatmentMedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type TreatmentMedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type TreatmentMedicineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $TreatmentMedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreatmentMedicine"
    objects: {
      treatment: Prisma.$TreatmentPayload<ExtArgs>
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      treatmentId: number
      medicineId: number
    }, ExtArgs["result"]["treatmentMedicine"]>
    composites: {}
  }

  type TreatmentMedicineGetPayload<S extends boolean | null | undefined | TreatmentMedicineDefaultArgs> = $Result.GetResult<Prisma.$TreatmentMedicinePayload, S>

  type TreatmentMedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreatmentMedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreatmentMedicineCountAggregateInputType | true
    }

  export interface TreatmentMedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreatmentMedicine'], meta: { name: 'TreatmentMedicine' } }
    /**
     * Find zero or one TreatmentMedicine that matches the filter.
     * @param {TreatmentMedicineFindUniqueArgs} args - Arguments to find a TreatmentMedicine
     * @example
     * // Get one TreatmentMedicine
     * const treatmentMedicine = await prisma.treatmentMedicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentMedicineFindUniqueArgs>(args: SelectSubset<T, TreatmentMedicineFindUniqueArgs<ExtArgs>>): Prisma__TreatmentMedicineClient<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreatmentMedicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreatmentMedicineFindUniqueOrThrowArgs} args - Arguments to find a TreatmentMedicine
     * @example
     * // Get one TreatmentMedicine
     * const treatmentMedicine = await prisma.treatmentMedicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentMedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentMedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentMedicineClient<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentMedicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentMedicineFindFirstArgs} args - Arguments to find a TreatmentMedicine
     * @example
     * // Get one TreatmentMedicine
     * const treatmentMedicine = await prisma.treatmentMedicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentMedicineFindFirstArgs>(args?: SelectSubset<T, TreatmentMedicineFindFirstArgs<ExtArgs>>): Prisma__TreatmentMedicineClient<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentMedicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentMedicineFindFirstOrThrowArgs} args - Arguments to find a TreatmentMedicine
     * @example
     * // Get one TreatmentMedicine
     * const treatmentMedicine = await prisma.treatmentMedicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentMedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentMedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentMedicineClient<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreatmentMedicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentMedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreatmentMedicines
     * const treatmentMedicines = await prisma.treatmentMedicine.findMany()
     * 
     * // Get first 10 TreatmentMedicines
     * const treatmentMedicines = await prisma.treatmentMedicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treatmentMedicineWithIdOnly = await prisma.treatmentMedicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreatmentMedicineFindManyArgs>(args?: SelectSubset<T, TreatmentMedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreatmentMedicine.
     * @param {TreatmentMedicineCreateArgs} args - Arguments to create a TreatmentMedicine.
     * @example
     * // Create one TreatmentMedicine
     * const TreatmentMedicine = await prisma.treatmentMedicine.create({
     *   data: {
     *     // ... data to create a TreatmentMedicine
     *   }
     * })
     * 
     */
    create<T extends TreatmentMedicineCreateArgs>(args: SelectSubset<T, TreatmentMedicineCreateArgs<ExtArgs>>): Prisma__TreatmentMedicineClient<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreatmentMedicines.
     * @param {TreatmentMedicineCreateManyArgs} args - Arguments to create many TreatmentMedicines.
     * @example
     * // Create many TreatmentMedicines
     * const treatmentMedicine = await prisma.treatmentMedicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentMedicineCreateManyArgs>(args?: SelectSubset<T, TreatmentMedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreatmentMedicines and returns the data saved in the database.
     * @param {TreatmentMedicineCreateManyAndReturnArgs} args - Arguments to create many TreatmentMedicines.
     * @example
     * // Create many TreatmentMedicines
     * const treatmentMedicine = await prisma.treatmentMedicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreatmentMedicines and only return the `id`
     * const treatmentMedicineWithIdOnly = await prisma.treatmentMedicine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreatmentMedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, TreatmentMedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TreatmentMedicine.
     * @param {TreatmentMedicineDeleteArgs} args - Arguments to delete one TreatmentMedicine.
     * @example
     * // Delete one TreatmentMedicine
     * const TreatmentMedicine = await prisma.treatmentMedicine.delete({
     *   where: {
     *     // ... filter to delete one TreatmentMedicine
     *   }
     * })
     * 
     */
    delete<T extends TreatmentMedicineDeleteArgs>(args: SelectSubset<T, TreatmentMedicineDeleteArgs<ExtArgs>>): Prisma__TreatmentMedicineClient<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreatmentMedicine.
     * @param {TreatmentMedicineUpdateArgs} args - Arguments to update one TreatmentMedicine.
     * @example
     * // Update one TreatmentMedicine
     * const treatmentMedicine = await prisma.treatmentMedicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentMedicineUpdateArgs>(args: SelectSubset<T, TreatmentMedicineUpdateArgs<ExtArgs>>): Prisma__TreatmentMedicineClient<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreatmentMedicines.
     * @param {TreatmentMedicineDeleteManyArgs} args - Arguments to filter TreatmentMedicines to delete.
     * @example
     * // Delete a few TreatmentMedicines
     * const { count } = await prisma.treatmentMedicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentMedicineDeleteManyArgs>(args?: SelectSubset<T, TreatmentMedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreatmentMedicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentMedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreatmentMedicines
     * const treatmentMedicine = await prisma.treatmentMedicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentMedicineUpdateManyArgs>(args: SelectSubset<T, TreatmentMedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreatmentMedicines and returns the data updated in the database.
     * @param {TreatmentMedicineUpdateManyAndReturnArgs} args - Arguments to update many TreatmentMedicines.
     * @example
     * // Update many TreatmentMedicines
     * const treatmentMedicine = await prisma.treatmentMedicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TreatmentMedicines and only return the `id`
     * const treatmentMedicineWithIdOnly = await prisma.treatmentMedicine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TreatmentMedicineUpdateManyAndReturnArgs>(args: SelectSubset<T, TreatmentMedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TreatmentMedicine.
     * @param {TreatmentMedicineUpsertArgs} args - Arguments to update or create a TreatmentMedicine.
     * @example
     * // Update or create a TreatmentMedicine
     * const treatmentMedicine = await prisma.treatmentMedicine.upsert({
     *   create: {
     *     // ... data to create a TreatmentMedicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreatmentMedicine we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentMedicineUpsertArgs>(args: SelectSubset<T, TreatmentMedicineUpsertArgs<ExtArgs>>): Prisma__TreatmentMedicineClient<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreatmentMedicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentMedicineCountArgs} args - Arguments to filter TreatmentMedicines to count.
     * @example
     * // Count the number of TreatmentMedicines
     * const count = await prisma.treatmentMedicine.count({
     *   where: {
     *     // ... the filter for the TreatmentMedicines we want to count
     *   }
     * })
    **/
    count<T extends TreatmentMedicineCountArgs>(
      args?: Subset<T, TreatmentMedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentMedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreatmentMedicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentMedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreatmentMedicineAggregateArgs>(args: Subset<T, TreatmentMedicineAggregateArgs>): Prisma.PrismaPromise<GetTreatmentMedicineAggregateType<T>>

    /**
     * Group by TreatmentMedicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentMedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreatmentMedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentMedicineGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentMedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreatmentMedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreatmentMedicine model
   */
  readonly fields: TreatmentMedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreatmentMedicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentMedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    treatment<T extends TreatmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentDefaultArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreatmentMedicine model
   */
  interface TreatmentMedicineFieldRefs {
    readonly id: FieldRef<"TreatmentMedicine", 'Int'>
    readonly treatmentId: FieldRef<"TreatmentMedicine", 'Int'>
    readonly medicineId: FieldRef<"TreatmentMedicine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TreatmentMedicine findUnique
   */
  export type TreatmentMedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentMedicine to fetch.
     */
    where: TreatmentMedicineWhereUniqueInput
  }

  /**
   * TreatmentMedicine findUniqueOrThrow
   */
  export type TreatmentMedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentMedicine to fetch.
     */
    where: TreatmentMedicineWhereUniqueInput
  }

  /**
   * TreatmentMedicine findFirst
   */
  export type TreatmentMedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentMedicine to fetch.
     */
    where?: TreatmentMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentMedicines to fetch.
     */
    orderBy?: TreatmentMedicineOrderByWithRelationInput | TreatmentMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentMedicines.
     */
    cursor?: TreatmentMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentMedicines.
     */
    distinct?: TreatmentMedicineScalarFieldEnum | TreatmentMedicineScalarFieldEnum[]
  }

  /**
   * TreatmentMedicine findFirstOrThrow
   */
  export type TreatmentMedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentMedicine to fetch.
     */
    where?: TreatmentMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentMedicines to fetch.
     */
    orderBy?: TreatmentMedicineOrderByWithRelationInput | TreatmentMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentMedicines.
     */
    cursor?: TreatmentMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentMedicines.
     */
    distinct?: TreatmentMedicineScalarFieldEnum | TreatmentMedicineScalarFieldEnum[]
  }

  /**
   * TreatmentMedicine findMany
   */
  export type TreatmentMedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentMedicines to fetch.
     */
    where?: TreatmentMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentMedicines to fetch.
     */
    orderBy?: TreatmentMedicineOrderByWithRelationInput | TreatmentMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreatmentMedicines.
     */
    cursor?: TreatmentMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentMedicines.
     */
    skip?: number
    distinct?: TreatmentMedicineScalarFieldEnum | TreatmentMedicineScalarFieldEnum[]
  }

  /**
   * TreatmentMedicine create
   */
  export type TreatmentMedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a TreatmentMedicine.
     */
    data: XOR<TreatmentMedicineCreateInput, TreatmentMedicineUncheckedCreateInput>
  }

  /**
   * TreatmentMedicine createMany
   */
  export type TreatmentMedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreatmentMedicines.
     */
    data: TreatmentMedicineCreateManyInput | TreatmentMedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreatmentMedicine createManyAndReturn
   */
  export type TreatmentMedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * The data used to create many TreatmentMedicines.
     */
    data: TreatmentMedicineCreateManyInput | TreatmentMedicineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreatmentMedicine update
   */
  export type TreatmentMedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a TreatmentMedicine.
     */
    data: XOR<TreatmentMedicineUpdateInput, TreatmentMedicineUncheckedUpdateInput>
    /**
     * Choose, which TreatmentMedicine to update.
     */
    where: TreatmentMedicineWhereUniqueInput
  }

  /**
   * TreatmentMedicine updateMany
   */
  export type TreatmentMedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreatmentMedicines.
     */
    data: XOR<TreatmentMedicineUpdateManyMutationInput, TreatmentMedicineUncheckedUpdateManyInput>
    /**
     * Filter which TreatmentMedicines to update
     */
    where?: TreatmentMedicineWhereInput
    /**
     * Limit how many TreatmentMedicines to update.
     */
    limit?: number
  }

  /**
   * TreatmentMedicine updateManyAndReturn
   */
  export type TreatmentMedicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * The data used to update TreatmentMedicines.
     */
    data: XOR<TreatmentMedicineUpdateManyMutationInput, TreatmentMedicineUncheckedUpdateManyInput>
    /**
     * Filter which TreatmentMedicines to update
     */
    where?: TreatmentMedicineWhereInput
    /**
     * Limit how many TreatmentMedicines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreatmentMedicine upsert
   */
  export type TreatmentMedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the TreatmentMedicine to update in case it exists.
     */
    where: TreatmentMedicineWhereUniqueInput
    /**
     * In case the TreatmentMedicine found by the `where` argument doesn't exist, create a new TreatmentMedicine with this data.
     */
    create: XOR<TreatmentMedicineCreateInput, TreatmentMedicineUncheckedCreateInput>
    /**
     * In case the TreatmentMedicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentMedicineUpdateInput, TreatmentMedicineUncheckedUpdateInput>
  }

  /**
   * TreatmentMedicine delete
   */
  export type TreatmentMedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    /**
     * Filter which TreatmentMedicine to delete.
     */
    where: TreatmentMedicineWhereUniqueInput
  }

  /**
   * TreatmentMedicine deleteMany
   */
  export type TreatmentMedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentMedicines to delete
     */
    where?: TreatmentMedicineWhereInput
    /**
     * Limit how many TreatmentMedicines to delete.
     */
    limit?: number
  }

  /**
   * TreatmentMedicine without action
   */
  export type TreatmentMedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
  }


  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    id: number | null
    concentration: number | null
    recommendedDosage: number | null
    teraputicCategoryid: number | null
    pharmaceuticalFormid: number | null
  }

  export type MedicineSumAggregateOutputType = {
    id: number | null
    concentration: number | null
    recommendedDosage: number | null
    teraputicCategoryid: number | null
    pharmaceuticalFormid: number | null
  }

  export type MedicineMinAggregateOutputType = {
    id: number | null
    code: string | null
    tradeName: string | null
    activeIngredient: string | null
    laboratory: string | null
    contraindications: string | null
    concentration: number | null
    recommendedDosage: number | null
    teraputicCategoryid: number | null
    pharmaceuticalFormid: number | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: number | null
    code: string | null
    tradeName: string | null
    activeIngredient: string | null
    laboratory: string | null
    contraindications: string | null
    concentration: number | null
    recommendedDosage: number | null
    teraputicCategoryid: number | null
    pharmaceuticalFormid: number | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    code: number
    tradeName: number
    activeIngredient: number
    laboratory: number
    contraindications: number
    concentration: number
    recommendedDosage: number
    teraputicCategoryid: number
    pharmaceuticalFormid: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    id?: true
    concentration?: true
    recommendedDosage?: true
    teraputicCategoryid?: true
    pharmaceuticalFormid?: true
  }

  export type MedicineSumAggregateInputType = {
    id?: true
    concentration?: true
    recommendedDosage?: true
    teraputicCategoryid?: true
    pharmaceuticalFormid?: true
  }

  export type MedicineMinAggregateInputType = {
    id?: true
    code?: true
    tradeName?: true
    activeIngredient?: true
    laboratory?: true
    contraindications?: true
    concentration?: true
    recommendedDosage?: true
    teraputicCategoryid?: true
    pharmaceuticalFormid?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    code?: true
    tradeName?: true
    activeIngredient?: true
    laboratory?: true
    contraindications?: true
    concentration?: true
    recommendedDosage?: true
    teraputicCategoryid?: true
    pharmaceuticalFormid?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    code?: true
    tradeName?: true
    activeIngredient?: true
    laboratory?: true
    contraindications?: true
    concentration?: true
    recommendedDosage?: true
    teraputicCategoryid?: true
    pharmaceuticalFormid?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: number
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications: string | null
    concentration: number
    recommendedDosage: number
    teraputicCategoryid: number
    pharmaceuticalFormid: number
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    tradeName?: boolean
    activeIngredient?: boolean
    laboratory?: boolean
    contraindications?: boolean
    concentration?: boolean
    recommendedDosage?: boolean
    teraputicCategoryid?: boolean
    pharmaceuticalFormid?: boolean
    treatmentMedicine?: boolean | Medicine$treatmentMedicineArgs<ExtArgs>
    terapeuticCategory?: boolean | TerapeuticCategoryDefaultArgs<ExtArgs>
    pharmaceuticalForm?: boolean | PharmaceuticalFormDefaultArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    tradeName?: boolean
    activeIngredient?: boolean
    laboratory?: boolean
    contraindications?: boolean
    concentration?: boolean
    recommendedDosage?: boolean
    teraputicCategoryid?: boolean
    pharmaceuticalFormid?: boolean
    terapeuticCategory?: boolean | TerapeuticCategoryDefaultArgs<ExtArgs>
    pharmaceuticalForm?: boolean | PharmaceuticalFormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    tradeName?: boolean
    activeIngredient?: boolean
    laboratory?: boolean
    contraindications?: boolean
    concentration?: boolean
    recommendedDosage?: boolean
    teraputicCategoryid?: boolean
    pharmaceuticalFormid?: boolean
    terapeuticCategory?: boolean | TerapeuticCategoryDefaultArgs<ExtArgs>
    pharmaceuticalForm?: boolean | PharmaceuticalFormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    id?: boolean
    code?: boolean
    tradeName?: boolean
    activeIngredient?: boolean
    laboratory?: boolean
    contraindications?: boolean
    concentration?: boolean
    recommendedDosage?: boolean
    teraputicCategoryid?: boolean
    pharmaceuticalFormid?: boolean
  }

  export type MedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "tradeName" | "activeIngredient" | "laboratory" | "contraindications" | "concentration" | "recommendedDosage" | "teraputicCategoryid" | "pharmaceuticalFormid", ExtArgs["result"]["medicine"]>
  export type MedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatmentMedicine?: boolean | Medicine$treatmentMedicineArgs<ExtArgs>
    terapeuticCategory?: boolean | TerapeuticCategoryDefaultArgs<ExtArgs>
    pharmaceuticalForm?: boolean | PharmaceuticalFormDefaultArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terapeuticCategory?: boolean | TerapeuticCategoryDefaultArgs<ExtArgs>
    pharmaceuticalForm?: boolean | PharmaceuticalFormDefaultArgs<ExtArgs>
  }
  export type MedicineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    terapeuticCategory?: boolean | TerapeuticCategoryDefaultArgs<ExtArgs>
    pharmaceuticalForm?: boolean | PharmaceuticalFormDefaultArgs<ExtArgs>
  }

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {
      treatmentMedicine: Prisma.$TreatmentMedicinePayload<ExtArgs>[]
      terapeuticCategory: Prisma.$TerapeuticCategoryPayload<ExtArgs>
      pharmaceuticalForm: Prisma.$PharmaceuticalFormPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      tradeName: string
      activeIngredient: string
      laboratory: string
      contraindications: string | null
      concentration: number
      recommendedDosage: number
      teraputicCategoryid: number
      pharmaceuticalFormid: number
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {MedicineUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicineUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    treatmentMedicine<T extends Medicine$treatmentMedicineArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$treatmentMedicineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentMedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    terapeuticCategory<T extends TerapeuticCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TerapeuticCategoryDefaultArgs<ExtArgs>>): Prisma__TerapeuticCategoryClient<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pharmaceuticalForm<T extends PharmaceuticalFormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmaceuticalFormDefaultArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medicine model
   */
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'Int'>
    readonly code: FieldRef<"Medicine", 'String'>
    readonly tradeName: FieldRef<"Medicine", 'String'>
    readonly activeIngredient: FieldRef<"Medicine", 'String'>
    readonly laboratory: FieldRef<"Medicine", 'String'>
    readonly contraindications: FieldRef<"Medicine", 'String'>
    readonly concentration: FieldRef<"Medicine", 'Int'>
    readonly recommendedDosage: FieldRef<"Medicine", 'Int'>
    readonly teraputicCategoryid: FieldRef<"Medicine", 'Int'>
    readonly pharmaceuticalFormid: FieldRef<"Medicine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine createManyAndReturn
   */
  export type MedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine updateManyAndReturn
   */
  export type MedicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to delete.
     */
    limit?: number
  }

  /**
   * Medicine.treatmentMedicine
   */
  export type Medicine$treatmentMedicineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentMedicine
     */
    select?: TreatmentMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentMedicine
     */
    omit?: TreatmentMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentMedicineInclude<ExtArgs> | null
    where?: TreatmentMedicineWhereInput
    orderBy?: TreatmentMedicineOrderByWithRelationInput | TreatmentMedicineOrderByWithRelationInput[]
    cursor?: TreatmentMedicineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentMedicineScalarFieldEnum | TreatmentMedicineScalarFieldEnum[]
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
  }


  /**
   * Model TerapeuticCategory
   */

  export type AggregateTerapeuticCategory = {
    _count: TerapeuticCategoryCountAggregateOutputType | null
    _avg: TerapeuticCategoryAvgAggregateOutputType | null
    _sum: TerapeuticCategorySumAggregateOutputType | null
    _min: TerapeuticCategoryMinAggregateOutputType | null
    _max: TerapeuticCategoryMaxAggregateOutputType | null
  }

  export type TerapeuticCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type TerapeuticCategorySumAggregateOutputType = {
    id: number | null
  }

  export type TerapeuticCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TerapeuticCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TerapeuticCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TerapeuticCategoryAvgAggregateInputType = {
    id?: true
  }

  export type TerapeuticCategorySumAggregateInputType = {
    id?: true
  }

  export type TerapeuticCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TerapeuticCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TerapeuticCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TerapeuticCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TerapeuticCategory to aggregate.
     */
    where?: TerapeuticCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerapeuticCategories to fetch.
     */
    orderBy?: TerapeuticCategoryOrderByWithRelationInput | TerapeuticCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TerapeuticCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerapeuticCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerapeuticCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TerapeuticCategories
    **/
    _count?: true | TerapeuticCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TerapeuticCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TerapeuticCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TerapeuticCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TerapeuticCategoryMaxAggregateInputType
  }

  export type GetTerapeuticCategoryAggregateType<T extends TerapeuticCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTerapeuticCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTerapeuticCategory[P]>
      : GetScalarType<T[P], AggregateTerapeuticCategory[P]>
  }




  export type TerapeuticCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TerapeuticCategoryWhereInput
    orderBy?: TerapeuticCategoryOrderByWithAggregationInput | TerapeuticCategoryOrderByWithAggregationInput[]
    by: TerapeuticCategoryScalarFieldEnum[] | TerapeuticCategoryScalarFieldEnum
    having?: TerapeuticCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TerapeuticCategoryCountAggregateInputType | true
    _avg?: TerapeuticCategoryAvgAggregateInputType
    _sum?: TerapeuticCategorySumAggregateInputType
    _min?: TerapeuticCategoryMinAggregateInputType
    _max?: TerapeuticCategoryMaxAggregateInputType
  }

  export type TerapeuticCategoryGroupByOutputType = {
    id: number
    name: string
    _count: TerapeuticCategoryCountAggregateOutputType | null
    _avg: TerapeuticCategoryAvgAggregateOutputType | null
    _sum: TerapeuticCategorySumAggregateOutputType | null
    _min: TerapeuticCategoryMinAggregateOutputType | null
    _max: TerapeuticCategoryMaxAggregateOutputType | null
  }

  type GetTerapeuticCategoryGroupByPayload<T extends TerapeuticCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TerapeuticCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TerapeuticCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TerapeuticCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TerapeuticCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TerapeuticCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    medicines?: boolean | TerapeuticCategory$medicinesArgs<ExtArgs>
    _count?: boolean | TerapeuticCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["terapeuticCategory"]>

  export type TerapeuticCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["terapeuticCategory"]>

  export type TerapeuticCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["terapeuticCategory"]>

  export type TerapeuticCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TerapeuticCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["terapeuticCategory"]>
  export type TerapeuticCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | TerapeuticCategory$medicinesArgs<ExtArgs>
    _count?: boolean | TerapeuticCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TerapeuticCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TerapeuticCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TerapeuticCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TerapeuticCategory"
    objects: {
      medicines: Prisma.$MedicinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["terapeuticCategory"]>
    composites: {}
  }

  type TerapeuticCategoryGetPayload<S extends boolean | null | undefined | TerapeuticCategoryDefaultArgs> = $Result.GetResult<Prisma.$TerapeuticCategoryPayload, S>

  type TerapeuticCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TerapeuticCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TerapeuticCategoryCountAggregateInputType | true
    }

  export interface TerapeuticCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TerapeuticCategory'], meta: { name: 'TerapeuticCategory' } }
    /**
     * Find zero or one TerapeuticCategory that matches the filter.
     * @param {TerapeuticCategoryFindUniqueArgs} args - Arguments to find a TerapeuticCategory
     * @example
     * // Get one TerapeuticCategory
     * const terapeuticCategory = await prisma.terapeuticCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TerapeuticCategoryFindUniqueArgs>(args: SelectSubset<T, TerapeuticCategoryFindUniqueArgs<ExtArgs>>): Prisma__TerapeuticCategoryClient<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TerapeuticCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TerapeuticCategoryFindUniqueOrThrowArgs} args - Arguments to find a TerapeuticCategory
     * @example
     * // Get one TerapeuticCategory
     * const terapeuticCategory = await prisma.terapeuticCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TerapeuticCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TerapeuticCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TerapeuticCategoryClient<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TerapeuticCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerapeuticCategoryFindFirstArgs} args - Arguments to find a TerapeuticCategory
     * @example
     * // Get one TerapeuticCategory
     * const terapeuticCategory = await prisma.terapeuticCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TerapeuticCategoryFindFirstArgs>(args?: SelectSubset<T, TerapeuticCategoryFindFirstArgs<ExtArgs>>): Prisma__TerapeuticCategoryClient<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TerapeuticCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerapeuticCategoryFindFirstOrThrowArgs} args - Arguments to find a TerapeuticCategory
     * @example
     * // Get one TerapeuticCategory
     * const terapeuticCategory = await prisma.terapeuticCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TerapeuticCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TerapeuticCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TerapeuticCategoryClient<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TerapeuticCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerapeuticCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TerapeuticCategories
     * const terapeuticCategories = await prisma.terapeuticCategory.findMany()
     * 
     * // Get first 10 TerapeuticCategories
     * const terapeuticCategories = await prisma.terapeuticCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const terapeuticCategoryWithIdOnly = await prisma.terapeuticCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TerapeuticCategoryFindManyArgs>(args?: SelectSubset<T, TerapeuticCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TerapeuticCategory.
     * @param {TerapeuticCategoryCreateArgs} args - Arguments to create a TerapeuticCategory.
     * @example
     * // Create one TerapeuticCategory
     * const TerapeuticCategory = await prisma.terapeuticCategory.create({
     *   data: {
     *     // ... data to create a TerapeuticCategory
     *   }
     * })
     * 
     */
    create<T extends TerapeuticCategoryCreateArgs>(args: SelectSubset<T, TerapeuticCategoryCreateArgs<ExtArgs>>): Prisma__TerapeuticCategoryClient<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TerapeuticCategories.
     * @param {TerapeuticCategoryCreateManyArgs} args - Arguments to create many TerapeuticCategories.
     * @example
     * // Create many TerapeuticCategories
     * const terapeuticCategory = await prisma.terapeuticCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TerapeuticCategoryCreateManyArgs>(args?: SelectSubset<T, TerapeuticCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TerapeuticCategories and returns the data saved in the database.
     * @param {TerapeuticCategoryCreateManyAndReturnArgs} args - Arguments to create many TerapeuticCategories.
     * @example
     * // Create many TerapeuticCategories
     * const terapeuticCategory = await prisma.terapeuticCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TerapeuticCategories and only return the `id`
     * const terapeuticCategoryWithIdOnly = await prisma.terapeuticCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TerapeuticCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TerapeuticCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TerapeuticCategory.
     * @param {TerapeuticCategoryDeleteArgs} args - Arguments to delete one TerapeuticCategory.
     * @example
     * // Delete one TerapeuticCategory
     * const TerapeuticCategory = await prisma.terapeuticCategory.delete({
     *   where: {
     *     // ... filter to delete one TerapeuticCategory
     *   }
     * })
     * 
     */
    delete<T extends TerapeuticCategoryDeleteArgs>(args: SelectSubset<T, TerapeuticCategoryDeleteArgs<ExtArgs>>): Prisma__TerapeuticCategoryClient<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TerapeuticCategory.
     * @param {TerapeuticCategoryUpdateArgs} args - Arguments to update one TerapeuticCategory.
     * @example
     * // Update one TerapeuticCategory
     * const terapeuticCategory = await prisma.terapeuticCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TerapeuticCategoryUpdateArgs>(args: SelectSubset<T, TerapeuticCategoryUpdateArgs<ExtArgs>>): Prisma__TerapeuticCategoryClient<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TerapeuticCategories.
     * @param {TerapeuticCategoryDeleteManyArgs} args - Arguments to filter TerapeuticCategories to delete.
     * @example
     * // Delete a few TerapeuticCategories
     * const { count } = await prisma.terapeuticCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TerapeuticCategoryDeleteManyArgs>(args?: SelectSubset<T, TerapeuticCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TerapeuticCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerapeuticCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TerapeuticCategories
     * const terapeuticCategory = await prisma.terapeuticCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TerapeuticCategoryUpdateManyArgs>(args: SelectSubset<T, TerapeuticCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TerapeuticCategories and returns the data updated in the database.
     * @param {TerapeuticCategoryUpdateManyAndReturnArgs} args - Arguments to update many TerapeuticCategories.
     * @example
     * // Update many TerapeuticCategories
     * const terapeuticCategory = await prisma.terapeuticCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TerapeuticCategories and only return the `id`
     * const terapeuticCategoryWithIdOnly = await prisma.terapeuticCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TerapeuticCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TerapeuticCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TerapeuticCategory.
     * @param {TerapeuticCategoryUpsertArgs} args - Arguments to update or create a TerapeuticCategory.
     * @example
     * // Update or create a TerapeuticCategory
     * const terapeuticCategory = await prisma.terapeuticCategory.upsert({
     *   create: {
     *     // ... data to create a TerapeuticCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TerapeuticCategory we want to update
     *   }
     * })
     */
    upsert<T extends TerapeuticCategoryUpsertArgs>(args: SelectSubset<T, TerapeuticCategoryUpsertArgs<ExtArgs>>): Prisma__TerapeuticCategoryClient<$Result.GetResult<Prisma.$TerapeuticCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TerapeuticCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerapeuticCategoryCountArgs} args - Arguments to filter TerapeuticCategories to count.
     * @example
     * // Count the number of TerapeuticCategories
     * const count = await prisma.terapeuticCategory.count({
     *   where: {
     *     // ... the filter for the TerapeuticCategories we want to count
     *   }
     * })
    **/
    count<T extends TerapeuticCategoryCountArgs>(
      args?: Subset<T, TerapeuticCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TerapeuticCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TerapeuticCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerapeuticCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TerapeuticCategoryAggregateArgs>(args: Subset<T, TerapeuticCategoryAggregateArgs>): Prisma.PrismaPromise<GetTerapeuticCategoryAggregateType<T>>

    /**
     * Group by TerapeuticCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TerapeuticCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TerapeuticCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TerapeuticCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TerapeuticCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TerapeuticCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTerapeuticCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TerapeuticCategory model
   */
  readonly fields: TerapeuticCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TerapeuticCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TerapeuticCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicines<T extends TerapeuticCategory$medicinesArgs<ExtArgs> = {}>(args?: Subset<T, TerapeuticCategory$medicinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TerapeuticCategory model
   */
  interface TerapeuticCategoryFieldRefs {
    readonly id: FieldRef<"TerapeuticCategory", 'Int'>
    readonly name: FieldRef<"TerapeuticCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TerapeuticCategory findUnique
   */
  export type TerapeuticCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerapeuticCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TerapeuticCategory to fetch.
     */
    where: TerapeuticCategoryWhereUniqueInput
  }

  /**
   * TerapeuticCategory findUniqueOrThrow
   */
  export type TerapeuticCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerapeuticCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TerapeuticCategory to fetch.
     */
    where: TerapeuticCategoryWhereUniqueInput
  }

  /**
   * TerapeuticCategory findFirst
   */
  export type TerapeuticCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerapeuticCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TerapeuticCategory to fetch.
     */
    where?: TerapeuticCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerapeuticCategories to fetch.
     */
    orderBy?: TerapeuticCategoryOrderByWithRelationInput | TerapeuticCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TerapeuticCategories.
     */
    cursor?: TerapeuticCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerapeuticCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerapeuticCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TerapeuticCategories.
     */
    distinct?: TerapeuticCategoryScalarFieldEnum | TerapeuticCategoryScalarFieldEnum[]
  }

  /**
   * TerapeuticCategory findFirstOrThrow
   */
  export type TerapeuticCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerapeuticCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TerapeuticCategory to fetch.
     */
    where?: TerapeuticCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerapeuticCategories to fetch.
     */
    orderBy?: TerapeuticCategoryOrderByWithRelationInput | TerapeuticCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TerapeuticCategories.
     */
    cursor?: TerapeuticCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerapeuticCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerapeuticCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TerapeuticCategories.
     */
    distinct?: TerapeuticCategoryScalarFieldEnum | TerapeuticCategoryScalarFieldEnum[]
  }

  /**
   * TerapeuticCategory findMany
   */
  export type TerapeuticCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerapeuticCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TerapeuticCategories to fetch.
     */
    where?: TerapeuticCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TerapeuticCategories to fetch.
     */
    orderBy?: TerapeuticCategoryOrderByWithRelationInput | TerapeuticCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TerapeuticCategories.
     */
    cursor?: TerapeuticCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TerapeuticCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TerapeuticCategories.
     */
    skip?: number
    distinct?: TerapeuticCategoryScalarFieldEnum | TerapeuticCategoryScalarFieldEnum[]
  }

  /**
   * TerapeuticCategory create
   */
  export type TerapeuticCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerapeuticCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TerapeuticCategory.
     */
    data: XOR<TerapeuticCategoryCreateInput, TerapeuticCategoryUncheckedCreateInput>
  }

  /**
   * TerapeuticCategory createMany
   */
  export type TerapeuticCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TerapeuticCategories.
     */
    data: TerapeuticCategoryCreateManyInput | TerapeuticCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TerapeuticCategory createManyAndReturn
   */
  export type TerapeuticCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many TerapeuticCategories.
     */
    data: TerapeuticCategoryCreateManyInput | TerapeuticCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TerapeuticCategory update
   */
  export type TerapeuticCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerapeuticCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TerapeuticCategory.
     */
    data: XOR<TerapeuticCategoryUpdateInput, TerapeuticCategoryUncheckedUpdateInput>
    /**
     * Choose, which TerapeuticCategory to update.
     */
    where: TerapeuticCategoryWhereUniqueInput
  }

  /**
   * TerapeuticCategory updateMany
   */
  export type TerapeuticCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TerapeuticCategories.
     */
    data: XOR<TerapeuticCategoryUpdateManyMutationInput, TerapeuticCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TerapeuticCategories to update
     */
    where?: TerapeuticCategoryWhereInput
    /**
     * Limit how many TerapeuticCategories to update.
     */
    limit?: number
  }

  /**
   * TerapeuticCategory updateManyAndReturn
   */
  export type TerapeuticCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * The data used to update TerapeuticCategories.
     */
    data: XOR<TerapeuticCategoryUpdateManyMutationInput, TerapeuticCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TerapeuticCategories to update
     */
    where?: TerapeuticCategoryWhereInput
    /**
     * Limit how many TerapeuticCategories to update.
     */
    limit?: number
  }

  /**
   * TerapeuticCategory upsert
   */
  export type TerapeuticCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerapeuticCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TerapeuticCategory to update in case it exists.
     */
    where: TerapeuticCategoryWhereUniqueInput
    /**
     * In case the TerapeuticCategory found by the `where` argument doesn't exist, create a new TerapeuticCategory with this data.
     */
    create: XOR<TerapeuticCategoryCreateInput, TerapeuticCategoryUncheckedCreateInput>
    /**
     * In case the TerapeuticCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TerapeuticCategoryUpdateInput, TerapeuticCategoryUncheckedUpdateInput>
  }

  /**
   * TerapeuticCategory delete
   */
  export type TerapeuticCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerapeuticCategoryInclude<ExtArgs> | null
    /**
     * Filter which TerapeuticCategory to delete.
     */
    where: TerapeuticCategoryWhereUniqueInput
  }

  /**
   * TerapeuticCategory deleteMany
   */
  export type TerapeuticCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TerapeuticCategories to delete
     */
    where?: TerapeuticCategoryWhereInput
    /**
     * Limit how many TerapeuticCategories to delete.
     */
    limit?: number
  }

  /**
   * TerapeuticCategory.medicines
   */
  export type TerapeuticCategory$medicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    cursor?: MedicineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * TerapeuticCategory without action
   */
  export type TerapeuticCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TerapeuticCategory
     */
    select?: TerapeuticCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TerapeuticCategory
     */
    omit?: TerapeuticCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TerapeuticCategoryInclude<ExtArgs> | null
  }


  /**
   * Model PharmaceuticalForm
   */

  export type AggregatePharmaceuticalForm = {
    _count: PharmaceuticalFormCountAggregateOutputType | null
    _avg: PharmaceuticalFormAvgAggregateOutputType | null
    _sum: PharmaceuticalFormSumAggregateOutputType | null
    _min: PharmaceuticalFormMinAggregateOutputType | null
    _max: PharmaceuticalFormMaxAggregateOutputType | null
  }

  export type PharmaceuticalFormAvgAggregateOutputType = {
    id: number | null
  }

  export type PharmaceuticalFormSumAggregateOutputType = {
    id: number | null
  }

  export type PharmaceuticalFormMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PharmaceuticalFormMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PharmaceuticalFormCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PharmaceuticalFormAvgAggregateInputType = {
    id?: true
  }

  export type PharmaceuticalFormSumAggregateInputType = {
    id?: true
  }

  export type PharmaceuticalFormMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PharmaceuticalFormMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PharmaceuticalFormCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PharmaceuticalFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PharmaceuticalForm to aggregate.
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmaceuticalForms to fetch.
     */
    orderBy?: PharmaceuticalFormOrderByWithRelationInput | PharmaceuticalFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmaceuticalFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmaceuticalForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmaceuticalForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PharmaceuticalForms
    **/
    _count?: true | PharmaceuticalFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PharmaceuticalFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PharmaceuticalFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmaceuticalFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmaceuticalFormMaxAggregateInputType
  }

  export type GetPharmaceuticalFormAggregateType<T extends PharmaceuticalFormAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmaceuticalForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmaceuticalForm[P]>
      : GetScalarType<T[P], AggregatePharmaceuticalForm[P]>
  }




  export type PharmaceuticalFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmaceuticalFormWhereInput
    orderBy?: PharmaceuticalFormOrderByWithAggregationInput | PharmaceuticalFormOrderByWithAggregationInput[]
    by: PharmaceuticalFormScalarFieldEnum[] | PharmaceuticalFormScalarFieldEnum
    having?: PharmaceuticalFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmaceuticalFormCountAggregateInputType | true
    _avg?: PharmaceuticalFormAvgAggregateInputType
    _sum?: PharmaceuticalFormSumAggregateInputType
    _min?: PharmaceuticalFormMinAggregateInputType
    _max?: PharmaceuticalFormMaxAggregateInputType
  }

  export type PharmaceuticalFormGroupByOutputType = {
    id: number
    name: string
    _count: PharmaceuticalFormCountAggregateOutputType | null
    _avg: PharmaceuticalFormAvgAggregateOutputType | null
    _sum: PharmaceuticalFormSumAggregateOutputType | null
    _min: PharmaceuticalFormMinAggregateOutputType | null
    _max: PharmaceuticalFormMaxAggregateOutputType | null
  }

  type GetPharmaceuticalFormGroupByPayload<T extends PharmaceuticalFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmaceuticalFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmaceuticalFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmaceuticalFormGroupByOutputType[P]>
            : GetScalarType<T[P], PharmaceuticalFormGroupByOutputType[P]>
        }
      >
    >


  export type PharmaceuticalFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    medicines?: boolean | PharmaceuticalForm$medicinesArgs<ExtArgs>
    _count?: boolean | PharmaceuticalFormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmaceuticalForm"]>

  export type PharmaceuticalFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["pharmaceuticalForm"]>

  export type PharmaceuticalFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["pharmaceuticalForm"]>

  export type PharmaceuticalFormSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PharmaceuticalFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["pharmaceuticalForm"]>
  export type PharmaceuticalFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | PharmaceuticalForm$medicinesArgs<ExtArgs>
    _count?: boolean | PharmaceuticalFormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PharmaceuticalFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PharmaceuticalFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PharmaceuticalFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PharmaceuticalForm"
    objects: {
      medicines: Prisma.$MedicinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["pharmaceuticalForm"]>
    composites: {}
  }

  type PharmaceuticalFormGetPayload<S extends boolean | null | undefined | PharmaceuticalFormDefaultArgs> = $Result.GetResult<Prisma.$PharmaceuticalFormPayload, S>

  type PharmaceuticalFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmaceuticalFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmaceuticalFormCountAggregateInputType | true
    }

  export interface PharmaceuticalFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PharmaceuticalForm'], meta: { name: 'PharmaceuticalForm' } }
    /**
     * Find zero or one PharmaceuticalForm that matches the filter.
     * @param {PharmaceuticalFormFindUniqueArgs} args - Arguments to find a PharmaceuticalForm
     * @example
     * // Get one PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmaceuticalFormFindUniqueArgs>(args: SelectSubset<T, PharmaceuticalFormFindUniqueArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PharmaceuticalForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmaceuticalFormFindUniqueOrThrowArgs} args - Arguments to find a PharmaceuticalForm
     * @example
     * // Get one PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmaceuticalFormFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmaceuticalFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PharmaceuticalForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormFindFirstArgs} args - Arguments to find a PharmaceuticalForm
     * @example
     * // Get one PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmaceuticalFormFindFirstArgs>(args?: SelectSubset<T, PharmaceuticalFormFindFirstArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PharmaceuticalForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormFindFirstOrThrowArgs} args - Arguments to find a PharmaceuticalForm
     * @example
     * // Get one PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmaceuticalFormFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmaceuticalFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PharmaceuticalForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PharmaceuticalForms
     * const pharmaceuticalForms = await prisma.pharmaceuticalForm.findMany()
     * 
     * // Get first 10 PharmaceuticalForms
     * const pharmaceuticalForms = await prisma.pharmaceuticalForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmaceuticalFormWithIdOnly = await prisma.pharmaceuticalForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmaceuticalFormFindManyArgs>(args?: SelectSubset<T, PharmaceuticalFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PharmaceuticalForm.
     * @param {PharmaceuticalFormCreateArgs} args - Arguments to create a PharmaceuticalForm.
     * @example
     * // Create one PharmaceuticalForm
     * const PharmaceuticalForm = await prisma.pharmaceuticalForm.create({
     *   data: {
     *     // ... data to create a PharmaceuticalForm
     *   }
     * })
     * 
     */
    create<T extends PharmaceuticalFormCreateArgs>(args: SelectSubset<T, PharmaceuticalFormCreateArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PharmaceuticalForms.
     * @param {PharmaceuticalFormCreateManyArgs} args - Arguments to create many PharmaceuticalForms.
     * @example
     * // Create many PharmaceuticalForms
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmaceuticalFormCreateManyArgs>(args?: SelectSubset<T, PharmaceuticalFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PharmaceuticalForms and returns the data saved in the database.
     * @param {PharmaceuticalFormCreateManyAndReturnArgs} args - Arguments to create many PharmaceuticalForms.
     * @example
     * // Create many PharmaceuticalForms
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PharmaceuticalForms and only return the `id`
     * const pharmaceuticalFormWithIdOnly = await prisma.pharmaceuticalForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmaceuticalFormCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmaceuticalFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PharmaceuticalForm.
     * @param {PharmaceuticalFormDeleteArgs} args - Arguments to delete one PharmaceuticalForm.
     * @example
     * // Delete one PharmaceuticalForm
     * const PharmaceuticalForm = await prisma.pharmaceuticalForm.delete({
     *   where: {
     *     // ... filter to delete one PharmaceuticalForm
     *   }
     * })
     * 
     */
    delete<T extends PharmaceuticalFormDeleteArgs>(args: SelectSubset<T, PharmaceuticalFormDeleteArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PharmaceuticalForm.
     * @param {PharmaceuticalFormUpdateArgs} args - Arguments to update one PharmaceuticalForm.
     * @example
     * // Update one PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmaceuticalFormUpdateArgs>(args: SelectSubset<T, PharmaceuticalFormUpdateArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PharmaceuticalForms.
     * @param {PharmaceuticalFormDeleteManyArgs} args - Arguments to filter PharmaceuticalForms to delete.
     * @example
     * // Delete a few PharmaceuticalForms
     * const { count } = await prisma.pharmaceuticalForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmaceuticalFormDeleteManyArgs>(args?: SelectSubset<T, PharmaceuticalFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PharmaceuticalForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PharmaceuticalForms
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmaceuticalFormUpdateManyArgs>(args: SelectSubset<T, PharmaceuticalFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PharmaceuticalForms and returns the data updated in the database.
     * @param {PharmaceuticalFormUpdateManyAndReturnArgs} args - Arguments to update many PharmaceuticalForms.
     * @example
     * // Update many PharmaceuticalForms
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PharmaceuticalForms and only return the `id`
     * const pharmaceuticalFormWithIdOnly = await prisma.pharmaceuticalForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PharmaceuticalFormUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmaceuticalFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PharmaceuticalForm.
     * @param {PharmaceuticalFormUpsertArgs} args - Arguments to update or create a PharmaceuticalForm.
     * @example
     * // Update or create a PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.upsert({
     *   create: {
     *     // ... data to create a PharmaceuticalForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PharmaceuticalForm we want to update
     *   }
     * })
     */
    upsert<T extends PharmaceuticalFormUpsertArgs>(args: SelectSubset<T, PharmaceuticalFormUpsertArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PharmaceuticalForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormCountArgs} args - Arguments to filter PharmaceuticalForms to count.
     * @example
     * // Count the number of PharmaceuticalForms
     * const count = await prisma.pharmaceuticalForm.count({
     *   where: {
     *     // ... the filter for the PharmaceuticalForms we want to count
     *   }
     * })
    **/
    count<T extends PharmaceuticalFormCountArgs>(
      args?: Subset<T, PharmaceuticalFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmaceuticalFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PharmaceuticalForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PharmaceuticalFormAggregateArgs>(args: Subset<T, PharmaceuticalFormAggregateArgs>): Prisma.PrismaPromise<GetPharmaceuticalFormAggregateType<T>>

    /**
     * Group by PharmaceuticalForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PharmaceuticalFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmaceuticalFormGroupByArgs['orderBy'] }
        : { orderBy?: PharmaceuticalFormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PharmaceuticalFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmaceuticalFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PharmaceuticalForm model
   */
  readonly fields: PharmaceuticalFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PharmaceuticalForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmaceuticalFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicines<T extends PharmaceuticalForm$medicinesArgs<ExtArgs> = {}>(args?: Subset<T, PharmaceuticalForm$medicinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PharmaceuticalForm model
   */
  interface PharmaceuticalFormFieldRefs {
    readonly id: FieldRef<"PharmaceuticalForm", 'Int'>
    readonly name: FieldRef<"PharmaceuticalForm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PharmaceuticalForm findUnique
   */
  export type PharmaceuticalFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter, which PharmaceuticalForm to fetch.
     */
    where: PharmaceuticalFormWhereUniqueInput
  }

  /**
   * PharmaceuticalForm findUniqueOrThrow
   */
  export type PharmaceuticalFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter, which PharmaceuticalForm to fetch.
     */
    where: PharmaceuticalFormWhereUniqueInput
  }

  /**
   * PharmaceuticalForm findFirst
   */
  export type PharmaceuticalFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter, which PharmaceuticalForm to fetch.
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmaceuticalForms to fetch.
     */
    orderBy?: PharmaceuticalFormOrderByWithRelationInput | PharmaceuticalFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PharmaceuticalForms.
     */
    cursor?: PharmaceuticalFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmaceuticalForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmaceuticalForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmaceuticalForms.
     */
    distinct?: PharmaceuticalFormScalarFieldEnum | PharmaceuticalFormScalarFieldEnum[]
  }

  /**
   * PharmaceuticalForm findFirstOrThrow
   */
  export type PharmaceuticalFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter, which PharmaceuticalForm to fetch.
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmaceuticalForms to fetch.
     */
    orderBy?: PharmaceuticalFormOrderByWithRelationInput | PharmaceuticalFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PharmaceuticalForms.
     */
    cursor?: PharmaceuticalFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmaceuticalForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmaceuticalForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmaceuticalForms.
     */
    distinct?: PharmaceuticalFormScalarFieldEnum | PharmaceuticalFormScalarFieldEnum[]
  }

  /**
   * PharmaceuticalForm findMany
   */
  export type PharmaceuticalFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter, which PharmaceuticalForms to fetch.
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmaceuticalForms to fetch.
     */
    orderBy?: PharmaceuticalFormOrderByWithRelationInput | PharmaceuticalFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PharmaceuticalForms.
     */
    cursor?: PharmaceuticalFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmaceuticalForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmaceuticalForms.
     */
    skip?: number
    distinct?: PharmaceuticalFormScalarFieldEnum | PharmaceuticalFormScalarFieldEnum[]
  }

  /**
   * PharmaceuticalForm create
   */
  export type PharmaceuticalFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * The data needed to create a PharmaceuticalForm.
     */
    data: XOR<PharmaceuticalFormCreateInput, PharmaceuticalFormUncheckedCreateInput>
  }

  /**
   * PharmaceuticalForm createMany
   */
  export type PharmaceuticalFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PharmaceuticalForms.
     */
    data: PharmaceuticalFormCreateManyInput | PharmaceuticalFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PharmaceuticalForm createManyAndReturn
   */
  export type PharmaceuticalFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * The data used to create many PharmaceuticalForms.
     */
    data: PharmaceuticalFormCreateManyInput | PharmaceuticalFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PharmaceuticalForm update
   */
  export type PharmaceuticalFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * The data needed to update a PharmaceuticalForm.
     */
    data: XOR<PharmaceuticalFormUpdateInput, PharmaceuticalFormUncheckedUpdateInput>
    /**
     * Choose, which PharmaceuticalForm to update.
     */
    where: PharmaceuticalFormWhereUniqueInput
  }

  /**
   * PharmaceuticalForm updateMany
   */
  export type PharmaceuticalFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PharmaceuticalForms.
     */
    data: XOR<PharmaceuticalFormUpdateManyMutationInput, PharmaceuticalFormUncheckedUpdateManyInput>
    /**
     * Filter which PharmaceuticalForms to update
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * Limit how many PharmaceuticalForms to update.
     */
    limit?: number
  }

  /**
   * PharmaceuticalForm updateManyAndReturn
   */
  export type PharmaceuticalFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * The data used to update PharmaceuticalForms.
     */
    data: XOR<PharmaceuticalFormUpdateManyMutationInput, PharmaceuticalFormUncheckedUpdateManyInput>
    /**
     * Filter which PharmaceuticalForms to update
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * Limit how many PharmaceuticalForms to update.
     */
    limit?: number
  }

  /**
   * PharmaceuticalForm upsert
   */
  export type PharmaceuticalFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * The filter to search for the PharmaceuticalForm to update in case it exists.
     */
    where: PharmaceuticalFormWhereUniqueInput
    /**
     * In case the PharmaceuticalForm found by the `where` argument doesn't exist, create a new PharmaceuticalForm with this data.
     */
    create: XOR<PharmaceuticalFormCreateInput, PharmaceuticalFormUncheckedCreateInput>
    /**
     * In case the PharmaceuticalForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmaceuticalFormUpdateInput, PharmaceuticalFormUncheckedUpdateInput>
  }

  /**
   * PharmaceuticalForm delete
   */
  export type PharmaceuticalFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter which PharmaceuticalForm to delete.
     */
    where: PharmaceuticalFormWhereUniqueInput
  }

  /**
   * PharmaceuticalForm deleteMany
   */
  export type PharmaceuticalFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PharmaceuticalForms to delete
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * Limit how many PharmaceuticalForms to delete.
     */
    limit?: number
  }

  /**
   * PharmaceuticalForm.medicines
   */
  export type PharmaceuticalForm$medicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    cursor?: MedicineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * PharmaceuticalForm without action
   */
  export type PharmaceuticalFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmaceuticalForm
     */
    omit?: PharmaceuticalFormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PatientScalarFieldEnum: {
    id: 'id',
    insurance_num: 'insurance_num',
    name: 'name',
    paternalSurname: 'paternalSurname',
    maternalSurname: 'maternalSurname',
    dateOfBirth: 'dateOfBirth',
    address: 'address',
    phone: 'phone',
    email: 'email',
    bloodType: 'bloodType'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const PatientAllergyScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    allergyId: 'allergyId'
  };

  export type PatientAllergyScalarFieldEnum = (typeof PatientAllergyScalarFieldEnum)[keyof typeof PatientAllergyScalarFieldEnum]


  export const AllergyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AllergyScalarFieldEnum = (typeof AllergyScalarFieldEnum)[keyof typeof AllergyScalarFieldEnum]


  export const HospitalizationScalarFieldEnum: {
    id: 'id',
    entryDate: 'entryDate',
    dischargeDate: 'dischargeDate',
    reason: 'reason',
    patientId: 'patientId',
    roomNumber: 'roomNumber'
  };

  export type HospitalizationScalarFieldEnum = (typeof HospitalizationScalarFieldEnum)[keyof typeof HospitalizationScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    number: 'number',
    type: 'type',
    floor: 'floor',
    state: 'state'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    professionalID: 'professionalID',
    name: 'name',
    paternalSurname: 'paternalSurname',
    maternalSurname: 'maternalSurname',
    yearsOfExp: 'yearsOfExp',
    phone: 'phone',
    email: 'email'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const DoctorSpecialityScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    specialityId: 'specialityId'
  };

  export type DoctorSpecialityScalarFieldEnum = (typeof DoctorSpecialityScalarFieldEnum)[keyof typeof DoctorSpecialityScalarFieldEnum]


  export const SpecialityScalarFieldEnum: {
    code: 'code',
    name: 'name',
    description: 'description'
  };

  export type SpecialityScalarFieldEnum = (typeof SpecialityScalarFieldEnum)[keyof typeof SpecialityScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    date: 'date',
    reason: 'reason',
    state: 'state',
    doctorId: 'doctorId',
    patientId: 'patientId'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const ConsultScalarFieldEnum: {
    id: 'id',
    diagnosis: 'diagnosis',
    observations: 'observations',
    appointmentId: 'appointmentId',
    treatmentId: 'treatmentId'
  };

  export type ConsultScalarFieldEnum = (typeof ConsultScalarFieldEnum)[keyof typeof ConsultScalarFieldEnum]


  export const TreatmentScalarFieldEnum: {
    id: 'id',
    dose: 'dose',
    frequency: 'frequency',
    frequencyUnit: 'frequencyUnit',
    duration: 'duration',
    durationUnit: 'durationUnit',
    observations: 'observations'
  };

  export type TreatmentScalarFieldEnum = (typeof TreatmentScalarFieldEnum)[keyof typeof TreatmentScalarFieldEnum]


  export const TreatmentMedicineScalarFieldEnum: {
    id: 'id',
    treatmentId: 'treatmentId',
    medicineId: 'medicineId'
  };

  export type TreatmentMedicineScalarFieldEnum = (typeof TreatmentMedicineScalarFieldEnum)[keyof typeof TreatmentMedicineScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    code: 'code',
    tradeName: 'tradeName',
    activeIngredient: 'activeIngredient',
    laboratory: 'laboratory',
    contraindications: 'contraindications',
    concentration: 'concentration',
    recommendedDosage: 'recommendedDosage',
    teraputicCategoryid: 'teraputicCategoryid',
    pharmaceuticalFormid: 'pharmaceuticalFormid'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const TerapeuticCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TerapeuticCategoryScalarFieldEnum = (typeof TerapeuticCategoryScalarFieldEnum)[keyof typeof TerapeuticCategoryScalarFieldEnum]


  export const PharmaceuticalFormScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PharmaceuticalFormScalarFieldEnum = (typeof PharmaceuticalFormScalarFieldEnum)[keyof typeof PharmaceuticalFormScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BloodType'
   */
  export type EnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType'>
    


  /**
   * Reference to a field of type 'BloodType[]'
   */
  export type ListEnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType[]'>
    


  /**
   * Reference to a field of type 'RoomType'
   */
  export type EnumRoomTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomType'>
    


  /**
   * Reference to a field of type 'RoomType[]'
   */
  export type ListEnumRoomTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomType[]'>
    


  /**
   * Reference to a field of type 'RoomState'
   */
  export type EnumRoomStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomState'>
    


  /**
   * Reference to a field of type 'RoomState[]'
   */
  export type ListEnumRoomStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomState[]'>
    


  /**
   * Reference to a field of type 'AppointmentState'
   */
  export type EnumAppointmentStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentState'>
    


  /**
   * Reference to a field of type 'AppointmentState[]'
   */
  export type ListEnumAppointmentStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentState[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TimeUnit'
   */
  export type EnumTimeUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeUnit'>
    


  /**
   * Reference to a field of type 'TimeUnit[]'
   */
  export type ListEnumTimeUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeUnit[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    insurance_num?: IntFilter<"Patient"> | number
    name?: StringFilter<"Patient"> | string
    paternalSurname?: StringFilter<"Patient"> | string
    maternalSurname?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    address?: StringFilter<"Patient"> | string
    phone?: StringFilter<"Patient"> | string
    email?: StringFilter<"Patient"> | string
    bloodType?: EnumBloodTypeFilter<"Patient"> | $Enums.BloodType
    allergy?: PatientAllergyListRelationFilter
    hospitalizations?: HospitalizationListRelationFilter
    appointments?: AppointmentListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    insurance_num?: SortOrder
    name?: SortOrder
    paternalSurname?: SortOrder
    maternalSurname?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    bloodType?: SortOrder
    allergy?: PatientAllergyOrderByRelationAggregateInput
    hospitalizations?: HospitalizationOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    insurance_num?: number
    email?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    paternalSurname?: StringFilter<"Patient"> | string
    maternalSurname?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    address?: StringFilter<"Patient"> | string
    phone?: StringFilter<"Patient"> | string
    bloodType?: EnumBloodTypeFilter<"Patient"> | $Enums.BloodType
    allergy?: PatientAllergyListRelationFilter
    hospitalizations?: HospitalizationListRelationFilter
    appointments?: AppointmentListRelationFilter
  }, "id" | "insurance_num" | "email">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    insurance_num?: SortOrder
    name?: SortOrder
    paternalSurname?: SortOrder
    maternalSurname?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    bloodType?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    insurance_num?: IntWithAggregatesFilter<"Patient"> | number
    name?: StringWithAggregatesFilter<"Patient"> | string
    paternalSurname?: StringWithAggregatesFilter<"Patient"> | string
    maternalSurname?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    address?: StringWithAggregatesFilter<"Patient"> | string
    phone?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringWithAggregatesFilter<"Patient"> | string
    bloodType?: EnumBloodTypeWithAggregatesFilter<"Patient"> | $Enums.BloodType
  }

  export type PatientAllergyWhereInput = {
    AND?: PatientAllergyWhereInput | PatientAllergyWhereInput[]
    OR?: PatientAllergyWhereInput[]
    NOT?: PatientAllergyWhereInput | PatientAllergyWhereInput[]
    id?: IntFilter<"PatientAllergy"> | number
    patientId?: IntFilter<"PatientAllergy"> | number
    allergyId?: IntFilter<"PatientAllergy"> | number
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    allergy?: XOR<AllergyScalarRelationFilter, AllergyWhereInput>
  }

  export type PatientAllergyOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    allergyId?: SortOrder
    patient?: PatientOrderByWithRelationInput
    allergy?: AllergyOrderByWithRelationInput
  }

  export type PatientAllergyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatientAllergyWhereInput | PatientAllergyWhereInput[]
    OR?: PatientAllergyWhereInput[]
    NOT?: PatientAllergyWhereInput | PatientAllergyWhereInput[]
    patientId?: IntFilter<"PatientAllergy"> | number
    allergyId?: IntFilter<"PatientAllergy"> | number
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    allergy?: XOR<AllergyScalarRelationFilter, AllergyWhereInput>
  }, "id">

  export type PatientAllergyOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    allergyId?: SortOrder
    _count?: PatientAllergyCountOrderByAggregateInput
    _avg?: PatientAllergyAvgOrderByAggregateInput
    _max?: PatientAllergyMaxOrderByAggregateInput
    _min?: PatientAllergyMinOrderByAggregateInput
    _sum?: PatientAllergySumOrderByAggregateInput
  }

  export type PatientAllergyScalarWhereWithAggregatesInput = {
    AND?: PatientAllergyScalarWhereWithAggregatesInput | PatientAllergyScalarWhereWithAggregatesInput[]
    OR?: PatientAllergyScalarWhereWithAggregatesInput[]
    NOT?: PatientAllergyScalarWhereWithAggregatesInput | PatientAllergyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PatientAllergy"> | number
    patientId?: IntWithAggregatesFilter<"PatientAllergy"> | number
    allergyId?: IntWithAggregatesFilter<"PatientAllergy"> | number
  }

  export type AllergyWhereInput = {
    AND?: AllergyWhereInput | AllergyWhereInput[]
    OR?: AllergyWhereInput[]
    NOT?: AllergyWhereInput | AllergyWhereInput[]
    id?: IntFilter<"Allergy"> | number
    name?: StringFilter<"Allergy"> | string
    patientAllergies?: PatientAllergyListRelationFilter
  }

  export type AllergyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    patientAllergies?: PatientAllergyOrderByRelationAggregateInput
  }

  export type AllergyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AllergyWhereInput | AllergyWhereInput[]
    OR?: AllergyWhereInput[]
    NOT?: AllergyWhereInput | AllergyWhereInput[]
    name?: StringFilter<"Allergy"> | string
    patientAllergies?: PatientAllergyListRelationFilter
  }, "id">

  export type AllergyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AllergyCountOrderByAggregateInput
    _avg?: AllergyAvgOrderByAggregateInput
    _max?: AllergyMaxOrderByAggregateInput
    _min?: AllergyMinOrderByAggregateInput
    _sum?: AllergySumOrderByAggregateInput
  }

  export type AllergyScalarWhereWithAggregatesInput = {
    AND?: AllergyScalarWhereWithAggregatesInput | AllergyScalarWhereWithAggregatesInput[]
    OR?: AllergyScalarWhereWithAggregatesInput[]
    NOT?: AllergyScalarWhereWithAggregatesInput | AllergyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Allergy"> | number
    name?: StringWithAggregatesFilter<"Allergy"> | string
  }

  export type HospitalizationWhereInput = {
    AND?: HospitalizationWhereInput | HospitalizationWhereInput[]
    OR?: HospitalizationWhereInput[]
    NOT?: HospitalizationWhereInput | HospitalizationWhereInput[]
    id?: IntFilter<"Hospitalization"> | number
    entryDate?: DateTimeFilter<"Hospitalization"> | Date | string
    dischargeDate?: DateTimeNullableFilter<"Hospitalization"> | Date | string | null
    reason?: StringFilter<"Hospitalization"> | string
    patientId?: IntFilter<"Hospitalization"> | number
    roomNumber?: IntFilter<"Hospitalization"> | number
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type HospitalizationOrderByWithRelationInput = {
    id?: SortOrder
    entryDate?: SortOrder
    dischargeDate?: SortOrderInput | SortOrder
    reason?: SortOrder
    patientId?: SortOrder
    roomNumber?: SortOrder
    patient?: PatientOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
  }

  export type HospitalizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HospitalizationWhereInput | HospitalizationWhereInput[]
    OR?: HospitalizationWhereInput[]
    NOT?: HospitalizationWhereInput | HospitalizationWhereInput[]
    entryDate?: DateTimeFilter<"Hospitalization"> | Date | string
    dischargeDate?: DateTimeNullableFilter<"Hospitalization"> | Date | string | null
    reason?: StringFilter<"Hospitalization"> | string
    patientId?: IntFilter<"Hospitalization"> | number
    roomNumber?: IntFilter<"Hospitalization"> | number
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type HospitalizationOrderByWithAggregationInput = {
    id?: SortOrder
    entryDate?: SortOrder
    dischargeDate?: SortOrderInput | SortOrder
    reason?: SortOrder
    patientId?: SortOrder
    roomNumber?: SortOrder
    _count?: HospitalizationCountOrderByAggregateInput
    _avg?: HospitalizationAvgOrderByAggregateInput
    _max?: HospitalizationMaxOrderByAggregateInput
    _min?: HospitalizationMinOrderByAggregateInput
    _sum?: HospitalizationSumOrderByAggregateInput
  }

  export type HospitalizationScalarWhereWithAggregatesInput = {
    AND?: HospitalizationScalarWhereWithAggregatesInput | HospitalizationScalarWhereWithAggregatesInput[]
    OR?: HospitalizationScalarWhereWithAggregatesInput[]
    NOT?: HospitalizationScalarWhereWithAggregatesInput | HospitalizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hospitalization"> | number
    entryDate?: DateTimeWithAggregatesFilter<"Hospitalization"> | Date | string
    dischargeDate?: DateTimeNullableWithAggregatesFilter<"Hospitalization"> | Date | string | null
    reason?: StringWithAggregatesFilter<"Hospitalization"> | string
    patientId?: IntWithAggregatesFilter<"Hospitalization"> | number
    roomNumber?: IntWithAggregatesFilter<"Hospitalization"> | number
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    number?: IntFilter<"Room"> | number
    type?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    floor?: StringFilter<"Room"> | string
    state?: EnumRoomStateFilter<"Room"> | $Enums.RoomState
    hospitalizations?: HospitalizationListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    number?: SortOrder
    type?: SortOrder
    floor?: SortOrder
    state?: SortOrder
    hospitalizations?: HospitalizationOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    number?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    type?: EnumRoomTypeFilter<"Room"> | $Enums.RoomType
    floor?: StringFilter<"Room"> | string
    state?: EnumRoomStateFilter<"Room"> | $Enums.RoomState
    hospitalizations?: HospitalizationListRelationFilter
  }, "number">

  export type RoomOrderByWithAggregationInput = {
    number?: SortOrder
    type?: SortOrder
    floor?: SortOrder
    state?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    number?: IntWithAggregatesFilter<"Room"> | number
    type?: EnumRoomTypeWithAggregatesFilter<"Room"> | $Enums.RoomType
    floor?: StringWithAggregatesFilter<"Room"> | string
    state?: EnumRoomStateWithAggregatesFilter<"Room"> | $Enums.RoomState
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: IntFilter<"Doctor"> | number
    professionalID?: StringFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    paternalSurname?: StringFilter<"Doctor"> | string
    maternalSurname?: StringFilter<"Doctor"> | string
    yearsOfExp?: IntFilter<"Doctor"> | number
    phone?: StringFilter<"Doctor"> | string
    email?: StringFilter<"Doctor"> | string
    doctorSpeciality?: DoctorSpecialityListRelationFilter
    appointments?: AppointmentListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    professionalID?: SortOrder
    name?: SortOrder
    paternalSurname?: SortOrder
    maternalSurname?: SortOrder
    yearsOfExp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    doctorSpeciality?: DoctorSpecialityOrderByRelationAggregateInput
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    professionalID?: string
    email?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    paternalSurname?: StringFilter<"Doctor"> | string
    maternalSurname?: StringFilter<"Doctor"> | string
    yearsOfExp?: IntFilter<"Doctor"> | number
    phone?: StringFilter<"Doctor"> | string
    doctorSpeciality?: DoctorSpecialityListRelationFilter
    appointments?: AppointmentListRelationFilter
  }, "id" | "professionalID" | "email">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    professionalID?: SortOrder
    name?: SortOrder
    paternalSurname?: SortOrder
    maternalSurname?: SortOrder
    yearsOfExp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doctor"> | number
    professionalID?: StringWithAggregatesFilter<"Doctor"> | string
    name?: StringWithAggregatesFilter<"Doctor"> | string
    paternalSurname?: StringWithAggregatesFilter<"Doctor"> | string
    maternalSurname?: StringWithAggregatesFilter<"Doctor"> | string
    yearsOfExp?: IntWithAggregatesFilter<"Doctor"> | number
    phone?: StringWithAggregatesFilter<"Doctor"> | string
    email?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type DoctorSpecialityWhereInput = {
    AND?: DoctorSpecialityWhereInput | DoctorSpecialityWhereInput[]
    OR?: DoctorSpecialityWhereInput[]
    NOT?: DoctorSpecialityWhereInput | DoctorSpecialityWhereInput[]
    id?: IntFilter<"DoctorSpeciality"> | number
    doctorId?: IntFilter<"DoctorSpeciality"> | number
    specialityId?: IntFilter<"DoctorSpeciality"> | number
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    speciality?: XOR<SpecialityScalarRelationFilter, SpecialityWhereInput>
  }

  export type DoctorSpecialityOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    specialityId?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    speciality?: SpecialityOrderByWithRelationInput
  }

  export type DoctorSpecialityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DoctorSpecialityWhereInput | DoctorSpecialityWhereInput[]
    OR?: DoctorSpecialityWhereInput[]
    NOT?: DoctorSpecialityWhereInput | DoctorSpecialityWhereInput[]
    doctorId?: IntFilter<"DoctorSpeciality"> | number
    specialityId?: IntFilter<"DoctorSpeciality"> | number
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    speciality?: XOR<SpecialityScalarRelationFilter, SpecialityWhereInput>
  }, "id">

  export type DoctorSpecialityOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    specialityId?: SortOrder
    _count?: DoctorSpecialityCountOrderByAggregateInput
    _avg?: DoctorSpecialityAvgOrderByAggregateInput
    _max?: DoctorSpecialityMaxOrderByAggregateInput
    _min?: DoctorSpecialityMinOrderByAggregateInput
    _sum?: DoctorSpecialitySumOrderByAggregateInput
  }

  export type DoctorSpecialityScalarWhereWithAggregatesInput = {
    AND?: DoctorSpecialityScalarWhereWithAggregatesInput | DoctorSpecialityScalarWhereWithAggregatesInput[]
    OR?: DoctorSpecialityScalarWhereWithAggregatesInput[]
    NOT?: DoctorSpecialityScalarWhereWithAggregatesInput | DoctorSpecialityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DoctorSpeciality"> | number
    doctorId?: IntWithAggregatesFilter<"DoctorSpeciality"> | number
    specialityId?: IntWithAggregatesFilter<"DoctorSpeciality"> | number
  }

  export type SpecialityWhereInput = {
    AND?: SpecialityWhereInput | SpecialityWhereInput[]
    OR?: SpecialityWhereInput[]
    NOT?: SpecialityWhereInput | SpecialityWhereInput[]
    code?: IntFilter<"Speciality"> | number
    name?: StringFilter<"Speciality"> | string
    description?: StringFilter<"Speciality"> | string
    doctorSpecialities?: DoctorSpecialityListRelationFilter
  }

  export type SpecialityOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    doctorSpecialities?: DoctorSpecialityOrderByRelationAggregateInput
  }

  export type SpecialityWhereUniqueInput = Prisma.AtLeast<{
    code?: number
    name?: string
    AND?: SpecialityWhereInput | SpecialityWhereInput[]
    OR?: SpecialityWhereInput[]
    NOT?: SpecialityWhereInput | SpecialityWhereInput[]
    description?: StringFilter<"Speciality"> | string
    doctorSpecialities?: DoctorSpecialityListRelationFilter
  }, "code" | "name">

  export type SpecialityOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: SpecialityCountOrderByAggregateInput
    _avg?: SpecialityAvgOrderByAggregateInput
    _max?: SpecialityMaxOrderByAggregateInput
    _min?: SpecialityMinOrderByAggregateInput
    _sum?: SpecialitySumOrderByAggregateInput
  }

  export type SpecialityScalarWhereWithAggregatesInput = {
    AND?: SpecialityScalarWhereWithAggregatesInput | SpecialityScalarWhereWithAggregatesInput[]
    OR?: SpecialityScalarWhereWithAggregatesInput[]
    NOT?: SpecialityScalarWhereWithAggregatesInput | SpecialityScalarWhereWithAggregatesInput[]
    code?: IntWithAggregatesFilter<"Speciality"> | number
    name?: StringWithAggregatesFilter<"Speciality"> | string
    description?: StringWithAggregatesFilter<"Speciality"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    reason?: StringFilter<"Appointment"> | string
    state?: EnumAppointmentStateFilter<"Appointment"> | $Enums.AppointmentState
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    consult?: XOR<ConsultNullableScalarRelationFilter, ConsultWhereInput> | null
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    state?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    consult?: ConsultOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    date?: DateTimeFilter<"Appointment"> | Date | string
    reason?: StringFilter<"Appointment"> | string
    state?: EnumAppointmentStateFilter<"Appointment"> | $Enums.AppointmentState
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
    consult?: XOR<ConsultNullableScalarRelationFilter, ConsultWhereInput> | null
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    state?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    reason?: StringWithAggregatesFilter<"Appointment"> | string
    state?: EnumAppointmentStateWithAggregatesFilter<"Appointment"> | $Enums.AppointmentState
    doctorId?: IntWithAggregatesFilter<"Appointment"> | number
    patientId?: IntWithAggregatesFilter<"Appointment"> | number
  }

  export type ConsultWhereInput = {
    AND?: ConsultWhereInput | ConsultWhereInput[]
    OR?: ConsultWhereInput[]
    NOT?: ConsultWhereInput | ConsultWhereInput[]
    id?: IntFilter<"Consult"> | number
    diagnosis?: StringFilter<"Consult"> | string
    observations?: StringFilter<"Consult"> | string
    appointmentId?: IntFilter<"Consult"> | number
    treatmentId?: IntFilter<"Consult"> | number
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    treatment?: XOR<TreatmentScalarRelationFilter, TreatmentWhereInput>
  }

  export type ConsultOrderByWithRelationInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    observations?: SortOrder
    appointmentId?: SortOrder
    treatmentId?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    treatment?: TreatmentOrderByWithRelationInput
  }

  export type ConsultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    appointmentId?: number
    treatmentId?: number
    AND?: ConsultWhereInput | ConsultWhereInput[]
    OR?: ConsultWhereInput[]
    NOT?: ConsultWhereInput | ConsultWhereInput[]
    diagnosis?: StringFilter<"Consult"> | string
    observations?: StringFilter<"Consult"> | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    treatment?: XOR<TreatmentScalarRelationFilter, TreatmentWhereInput>
  }, "id" | "appointmentId" | "treatmentId">

  export type ConsultOrderByWithAggregationInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    observations?: SortOrder
    appointmentId?: SortOrder
    treatmentId?: SortOrder
    _count?: ConsultCountOrderByAggregateInput
    _avg?: ConsultAvgOrderByAggregateInput
    _max?: ConsultMaxOrderByAggregateInput
    _min?: ConsultMinOrderByAggregateInput
    _sum?: ConsultSumOrderByAggregateInput
  }

  export type ConsultScalarWhereWithAggregatesInput = {
    AND?: ConsultScalarWhereWithAggregatesInput | ConsultScalarWhereWithAggregatesInput[]
    OR?: ConsultScalarWhereWithAggregatesInput[]
    NOT?: ConsultScalarWhereWithAggregatesInput | ConsultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consult"> | number
    diagnosis?: StringWithAggregatesFilter<"Consult"> | string
    observations?: StringWithAggregatesFilter<"Consult"> | string
    appointmentId?: IntWithAggregatesFilter<"Consult"> | number
    treatmentId?: IntWithAggregatesFilter<"Consult"> | number
  }

  export type TreatmentWhereInput = {
    AND?: TreatmentWhereInput | TreatmentWhereInput[]
    OR?: TreatmentWhereInput[]
    NOT?: TreatmentWhereInput | TreatmentWhereInput[]
    id?: IntFilter<"Treatment"> | number
    dose?: DecimalFilter<"Treatment"> | Decimal | DecimalJsLike | number | string
    frequency?: IntFilter<"Treatment"> | number
    frequencyUnit?: EnumTimeUnitFilter<"Treatment"> | $Enums.TimeUnit
    duration?: IntFilter<"Treatment"> | number
    durationUnit?: EnumTimeUnitFilter<"Treatment"> | $Enums.TimeUnit
    observations?: StringFilter<"Treatment"> | string
    consult?: XOR<ConsultNullableScalarRelationFilter, ConsultWhereInput> | null
    treatmentMedicine?: TreatmentMedicineListRelationFilter
  }

  export type TreatmentOrderByWithRelationInput = {
    id?: SortOrder
    dose?: SortOrder
    frequency?: SortOrder
    frequencyUnit?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
    observations?: SortOrder
    consult?: ConsultOrderByWithRelationInput
    treatmentMedicine?: TreatmentMedicineOrderByRelationAggregateInput
  }

  export type TreatmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TreatmentWhereInput | TreatmentWhereInput[]
    OR?: TreatmentWhereInput[]
    NOT?: TreatmentWhereInput | TreatmentWhereInput[]
    dose?: DecimalFilter<"Treatment"> | Decimal | DecimalJsLike | number | string
    frequency?: IntFilter<"Treatment"> | number
    frequencyUnit?: EnumTimeUnitFilter<"Treatment"> | $Enums.TimeUnit
    duration?: IntFilter<"Treatment"> | number
    durationUnit?: EnumTimeUnitFilter<"Treatment"> | $Enums.TimeUnit
    observations?: StringFilter<"Treatment"> | string
    consult?: XOR<ConsultNullableScalarRelationFilter, ConsultWhereInput> | null
    treatmentMedicine?: TreatmentMedicineListRelationFilter
  }, "id">

  export type TreatmentOrderByWithAggregationInput = {
    id?: SortOrder
    dose?: SortOrder
    frequency?: SortOrder
    frequencyUnit?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
    observations?: SortOrder
    _count?: TreatmentCountOrderByAggregateInput
    _avg?: TreatmentAvgOrderByAggregateInput
    _max?: TreatmentMaxOrderByAggregateInput
    _min?: TreatmentMinOrderByAggregateInput
    _sum?: TreatmentSumOrderByAggregateInput
  }

  export type TreatmentScalarWhereWithAggregatesInput = {
    AND?: TreatmentScalarWhereWithAggregatesInput | TreatmentScalarWhereWithAggregatesInput[]
    OR?: TreatmentScalarWhereWithAggregatesInput[]
    NOT?: TreatmentScalarWhereWithAggregatesInput | TreatmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Treatment"> | number
    dose?: DecimalWithAggregatesFilter<"Treatment"> | Decimal | DecimalJsLike | number | string
    frequency?: IntWithAggregatesFilter<"Treatment"> | number
    frequencyUnit?: EnumTimeUnitWithAggregatesFilter<"Treatment"> | $Enums.TimeUnit
    duration?: IntWithAggregatesFilter<"Treatment"> | number
    durationUnit?: EnumTimeUnitWithAggregatesFilter<"Treatment"> | $Enums.TimeUnit
    observations?: StringWithAggregatesFilter<"Treatment"> | string
  }

  export type TreatmentMedicineWhereInput = {
    AND?: TreatmentMedicineWhereInput | TreatmentMedicineWhereInput[]
    OR?: TreatmentMedicineWhereInput[]
    NOT?: TreatmentMedicineWhereInput | TreatmentMedicineWhereInput[]
    id?: IntFilter<"TreatmentMedicine"> | number
    treatmentId?: IntFilter<"TreatmentMedicine"> | number
    medicineId?: IntFilter<"TreatmentMedicine"> | number
    treatment?: XOR<TreatmentScalarRelationFilter, TreatmentWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }

  export type TreatmentMedicineOrderByWithRelationInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    medicineId?: SortOrder
    treatment?: TreatmentOrderByWithRelationInput
    medicine?: MedicineOrderByWithRelationInput
  }

  export type TreatmentMedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TreatmentMedicineWhereInput | TreatmentMedicineWhereInput[]
    OR?: TreatmentMedicineWhereInput[]
    NOT?: TreatmentMedicineWhereInput | TreatmentMedicineWhereInput[]
    treatmentId?: IntFilter<"TreatmentMedicine"> | number
    medicineId?: IntFilter<"TreatmentMedicine"> | number
    treatment?: XOR<TreatmentScalarRelationFilter, TreatmentWhereInput>
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }, "id">

  export type TreatmentMedicineOrderByWithAggregationInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    medicineId?: SortOrder
    _count?: TreatmentMedicineCountOrderByAggregateInput
    _avg?: TreatmentMedicineAvgOrderByAggregateInput
    _max?: TreatmentMedicineMaxOrderByAggregateInput
    _min?: TreatmentMedicineMinOrderByAggregateInput
    _sum?: TreatmentMedicineSumOrderByAggregateInput
  }

  export type TreatmentMedicineScalarWhereWithAggregatesInput = {
    AND?: TreatmentMedicineScalarWhereWithAggregatesInput | TreatmentMedicineScalarWhereWithAggregatesInput[]
    OR?: TreatmentMedicineScalarWhereWithAggregatesInput[]
    NOT?: TreatmentMedicineScalarWhereWithAggregatesInput | TreatmentMedicineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TreatmentMedicine"> | number
    treatmentId?: IntWithAggregatesFilter<"TreatmentMedicine"> | number
    medicineId?: IntWithAggregatesFilter<"TreatmentMedicine"> | number
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: IntFilter<"Medicine"> | number
    code?: StringFilter<"Medicine"> | string
    tradeName?: StringFilter<"Medicine"> | string
    activeIngredient?: StringFilter<"Medicine"> | string
    laboratory?: StringFilter<"Medicine"> | string
    contraindications?: StringNullableFilter<"Medicine"> | string | null
    concentration?: IntFilter<"Medicine"> | number
    recommendedDosage?: IntFilter<"Medicine"> | number
    teraputicCategoryid?: IntFilter<"Medicine"> | number
    pharmaceuticalFormid?: IntFilter<"Medicine"> | number
    treatmentMedicine?: TreatmentMedicineListRelationFilter
    terapeuticCategory?: XOR<TerapeuticCategoryScalarRelationFilter, TerapeuticCategoryWhereInput>
    pharmaceuticalForm?: XOR<PharmaceuticalFormScalarRelationFilter, PharmaceuticalFormWhereInput>
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    tradeName?: SortOrder
    activeIngredient?: SortOrder
    laboratory?: SortOrder
    contraindications?: SortOrderInput | SortOrder
    concentration?: SortOrder
    recommendedDosage?: SortOrder
    teraputicCategoryid?: SortOrder
    pharmaceuticalFormid?: SortOrder
    treatmentMedicine?: TreatmentMedicineOrderByRelationAggregateInput
    terapeuticCategory?: TerapeuticCategoryOrderByWithRelationInput
    pharmaceuticalForm?: PharmaceuticalFormOrderByWithRelationInput
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    tradeName?: StringFilter<"Medicine"> | string
    activeIngredient?: StringFilter<"Medicine"> | string
    laboratory?: StringFilter<"Medicine"> | string
    contraindications?: StringNullableFilter<"Medicine"> | string | null
    concentration?: IntFilter<"Medicine"> | number
    recommendedDosage?: IntFilter<"Medicine"> | number
    teraputicCategoryid?: IntFilter<"Medicine"> | number
    pharmaceuticalFormid?: IntFilter<"Medicine"> | number
    treatmentMedicine?: TreatmentMedicineListRelationFilter
    terapeuticCategory?: XOR<TerapeuticCategoryScalarRelationFilter, TerapeuticCategoryWhereInput>
    pharmaceuticalForm?: XOR<PharmaceuticalFormScalarRelationFilter, PharmaceuticalFormWhereInput>
  }, "id" | "code">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    tradeName?: SortOrder
    activeIngredient?: SortOrder
    laboratory?: SortOrder
    contraindications?: SortOrderInput | SortOrder
    concentration?: SortOrder
    recommendedDosage?: SortOrder
    teraputicCategoryid?: SortOrder
    pharmaceuticalFormid?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _avg?: MedicineAvgOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
    _sum?: MedicineSumOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medicine"> | number
    code?: StringWithAggregatesFilter<"Medicine"> | string
    tradeName?: StringWithAggregatesFilter<"Medicine"> | string
    activeIngredient?: StringWithAggregatesFilter<"Medicine"> | string
    laboratory?: StringWithAggregatesFilter<"Medicine"> | string
    contraindications?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    concentration?: IntWithAggregatesFilter<"Medicine"> | number
    recommendedDosage?: IntWithAggregatesFilter<"Medicine"> | number
    teraputicCategoryid?: IntWithAggregatesFilter<"Medicine"> | number
    pharmaceuticalFormid?: IntWithAggregatesFilter<"Medicine"> | number
  }

  export type TerapeuticCategoryWhereInput = {
    AND?: TerapeuticCategoryWhereInput | TerapeuticCategoryWhereInput[]
    OR?: TerapeuticCategoryWhereInput[]
    NOT?: TerapeuticCategoryWhereInput | TerapeuticCategoryWhereInput[]
    id?: IntFilter<"TerapeuticCategory"> | number
    name?: StringFilter<"TerapeuticCategory"> | string
    medicines?: MedicineListRelationFilter
  }

  export type TerapeuticCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    medicines?: MedicineOrderByRelationAggregateInput
  }

  export type TerapeuticCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TerapeuticCategoryWhereInput | TerapeuticCategoryWhereInput[]
    OR?: TerapeuticCategoryWhereInput[]
    NOT?: TerapeuticCategoryWhereInput | TerapeuticCategoryWhereInput[]
    name?: StringFilter<"TerapeuticCategory"> | string
    medicines?: MedicineListRelationFilter
  }, "id">

  export type TerapeuticCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TerapeuticCategoryCountOrderByAggregateInput
    _avg?: TerapeuticCategoryAvgOrderByAggregateInput
    _max?: TerapeuticCategoryMaxOrderByAggregateInput
    _min?: TerapeuticCategoryMinOrderByAggregateInput
    _sum?: TerapeuticCategorySumOrderByAggregateInput
  }

  export type TerapeuticCategoryScalarWhereWithAggregatesInput = {
    AND?: TerapeuticCategoryScalarWhereWithAggregatesInput | TerapeuticCategoryScalarWhereWithAggregatesInput[]
    OR?: TerapeuticCategoryScalarWhereWithAggregatesInput[]
    NOT?: TerapeuticCategoryScalarWhereWithAggregatesInput | TerapeuticCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TerapeuticCategory"> | number
    name?: StringWithAggregatesFilter<"TerapeuticCategory"> | string
  }

  export type PharmaceuticalFormWhereInput = {
    AND?: PharmaceuticalFormWhereInput | PharmaceuticalFormWhereInput[]
    OR?: PharmaceuticalFormWhereInput[]
    NOT?: PharmaceuticalFormWhereInput | PharmaceuticalFormWhereInput[]
    id?: IntFilter<"PharmaceuticalForm"> | number
    name?: StringFilter<"PharmaceuticalForm"> | string
    medicines?: MedicineListRelationFilter
  }

  export type PharmaceuticalFormOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    medicines?: MedicineOrderByRelationAggregateInput
  }

  export type PharmaceuticalFormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PharmaceuticalFormWhereInput | PharmaceuticalFormWhereInput[]
    OR?: PharmaceuticalFormWhereInput[]
    NOT?: PharmaceuticalFormWhereInput | PharmaceuticalFormWhereInput[]
    name?: StringFilter<"PharmaceuticalForm"> | string
    medicines?: MedicineListRelationFilter
  }, "id">

  export type PharmaceuticalFormOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PharmaceuticalFormCountOrderByAggregateInput
    _avg?: PharmaceuticalFormAvgOrderByAggregateInput
    _max?: PharmaceuticalFormMaxOrderByAggregateInput
    _min?: PharmaceuticalFormMinOrderByAggregateInput
    _sum?: PharmaceuticalFormSumOrderByAggregateInput
  }

  export type PharmaceuticalFormScalarWhereWithAggregatesInput = {
    AND?: PharmaceuticalFormScalarWhereWithAggregatesInput | PharmaceuticalFormScalarWhereWithAggregatesInput[]
    OR?: PharmaceuticalFormScalarWhereWithAggregatesInput[]
    NOT?: PharmaceuticalFormScalarWhereWithAggregatesInput | PharmaceuticalFormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PharmaceuticalForm"> | number
    name?: StringWithAggregatesFilter<"PharmaceuticalForm"> | string
  }

  export type PatientCreateInput = {
    insurance_num: number
    name: string
    paternalSurname: string
    maternalSurname: string
    dateOfBirth: Date | string
    address: string
    phone: string
    email: string
    bloodType?: $Enums.BloodType
    allergy?: PatientAllergyCreateNestedManyWithoutPatientInput
    hospitalizations?: HospitalizationCreateNestedManyWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    insurance_num: number
    name: string
    paternalSurname: string
    maternalSurname: string
    dateOfBirth: Date | string
    address: string
    phone: string
    email: string
    bloodType?: $Enums.BloodType
    allergy?: PatientAllergyUncheckedCreateNestedManyWithoutPatientInput
    hospitalizations?: HospitalizationUncheckedCreateNestedManyWithoutPatientInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    insurance_num?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    allergy?: PatientAllergyUpdateManyWithoutPatientNestedInput
    hospitalizations?: HospitalizationUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    insurance_num?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    allergy?: PatientAllergyUncheckedUpdateManyWithoutPatientNestedInput
    hospitalizations?: HospitalizationUncheckedUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    insurance_num: number
    name: string
    paternalSurname: string
    maternalSurname: string
    dateOfBirth: Date | string
    address: string
    phone: string
    email: string
    bloodType?: $Enums.BloodType
  }

  export type PatientUpdateManyMutationInput = {
    insurance_num?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    insurance_num?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
  }

  export type PatientAllergyCreateInput = {
    patient: PatientCreateNestedOneWithoutAllergyInput
    allergy: AllergyCreateNestedOneWithoutPatientAllergiesInput
  }

  export type PatientAllergyUncheckedCreateInput = {
    id?: number
    patientId: number
    allergyId: number
  }

  export type PatientAllergyUpdateInput = {
    patient?: PatientUpdateOneRequiredWithoutAllergyNestedInput
    allergy?: AllergyUpdateOneRequiredWithoutPatientAllergiesNestedInput
  }

  export type PatientAllergyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    allergyId?: IntFieldUpdateOperationsInput | number
  }

  export type PatientAllergyCreateManyInput = {
    id?: number
    patientId: number
    allergyId: number
  }

  export type PatientAllergyUpdateManyMutationInput = {

  }

  export type PatientAllergyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    allergyId?: IntFieldUpdateOperationsInput | number
  }

  export type AllergyCreateInput = {
    name: string
    patientAllergies?: PatientAllergyCreateNestedManyWithoutAllergyInput
  }

  export type AllergyUncheckedCreateInput = {
    id?: number
    name: string
    patientAllergies?: PatientAllergyUncheckedCreateNestedManyWithoutAllergyInput
  }

  export type AllergyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    patientAllergies?: PatientAllergyUpdateManyWithoutAllergyNestedInput
  }

  export type AllergyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    patientAllergies?: PatientAllergyUncheckedUpdateManyWithoutAllergyNestedInput
  }

  export type AllergyCreateManyInput = {
    id?: number
    name: string
  }

  export type AllergyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AllergyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalizationCreateInput = {
    entryDate: Date | string
    dischargeDate?: Date | string | null
    reason: string
    patient: PatientCreateNestedOneWithoutHospitalizationsInput
    room: RoomCreateNestedOneWithoutHospitalizationsInput
  }

  export type HospitalizationUncheckedCreateInput = {
    id?: number
    entryDate: Date | string
    dischargeDate?: Date | string | null
    reason: string
    patientId: number
    roomNumber: number
  }

  export type HospitalizationUpdateInput = {
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: StringFieldUpdateOperationsInput | string
    patient?: PatientUpdateOneRequiredWithoutHospitalizationsNestedInput
    room?: RoomUpdateOneRequiredWithoutHospitalizationsNestedInput
  }

  export type HospitalizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
  }

  export type HospitalizationCreateManyInput = {
    id?: number
    entryDate: Date | string
    dischargeDate?: Date | string | null
    reason: string
    patientId: number
    roomNumber: number
  }

  export type HospitalizationUpdateManyMutationInput = {
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type HospitalizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
    roomNumber?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateInput = {
    type?: $Enums.RoomType
    floor: string
    state: $Enums.RoomState
    hospitalizations?: HospitalizationCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    number?: number
    type?: $Enums.RoomType
    floor: string
    state: $Enums.RoomState
    hospitalizations?: HospitalizationUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    floor?: StringFieldUpdateOperationsInput | string
    state?: EnumRoomStateFieldUpdateOperationsInput | $Enums.RoomState
    hospitalizations?: HospitalizationUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    floor?: StringFieldUpdateOperationsInput | string
    state?: EnumRoomStateFieldUpdateOperationsInput | $Enums.RoomState
    hospitalizations?: HospitalizationUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    number?: number
    type?: $Enums.RoomType
    floor: string
    state: $Enums.RoomState
  }

  export type RoomUpdateManyMutationInput = {
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    floor?: StringFieldUpdateOperationsInput | string
    state?: EnumRoomStateFieldUpdateOperationsInput | $Enums.RoomState
  }

  export type RoomUncheckedUpdateManyInput = {
    number?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    floor?: StringFieldUpdateOperationsInput | string
    state?: EnumRoomStateFieldUpdateOperationsInput | $Enums.RoomState
  }

  export type DoctorCreateInput = {
    professionalID: string
    name: string
    paternalSurname: string
    maternalSurname: string
    yearsOfExp: number
    phone: string
    email: string
    doctorSpeciality?: DoctorSpecialityCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: number
    professionalID: string
    name: string
    paternalSurname: string
    maternalSurname: string
    yearsOfExp: number
    phone: string
    email: string
    doctorSpeciality?: DoctorSpecialityUncheckedCreateNestedManyWithoutDoctorInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    professionalID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    yearsOfExp?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    doctorSpeciality?: DoctorSpecialityUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    yearsOfExp?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    doctorSpeciality?: DoctorSpecialityUncheckedUpdateManyWithoutDoctorNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: number
    professionalID: string
    name: string
    paternalSurname: string
    maternalSurname: string
    yearsOfExp: number
    phone: string
    email: string
  }

  export type DoctorUpdateManyMutationInput = {
    professionalID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    yearsOfExp?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    yearsOfExp?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSpecialityCreateInput = {
    doctor: DoctorCreateNestedOneWithoutDoctorSpecialityInput
    speciality: SpecialityCreateNestedOneWithoutDoctorSpecialitiesInput
  }

  export type DoctorSpecialityUncheckedCreateInput = {
    id?: number
    doctorId: number
    specialityId: number
  }

  export type DoctorSpecialityUpdateInput = {
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSpecialityNestedInput
    speciality?: SpecialityUpdateOneRequiredWithoutDoctorSpecialitiesNestedInput
  }

  export type DoctorSpecialityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    specialityId?: IntFieldUpdateOperationsInput | number
  }

  export type DoctorSpecialityCreateManyInput = {
    id?: number
    doctorId: number
    specialityId: number
  }

  export type DoctorSpecialityUpdateManyMutationInput = {

  }

  export type DoctorSpecialityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
    specialityId?: IntFieldUpdateOperationsInput | number
  }

  export type SpecialityCreateInput = {
    name: string
    description: string
    doctorSpecialities?: DoctorSpecialityCreateNestedManyWithoutSpecialityInput
  }

  export type SpecialityUncheckedCreateInput = {
    code?: number
    name: string
    description: string
    doctorSpecialities?: DoctorSpecialityUncheckedCreateNestedManyWithoutSpecialityInput
  }

  export type SpecialityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorSpecialities?: DoctorSpecialityUpdateManyWithoutSpecialityNestedInput
  }

  export type SpecialityUncheckedUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    doctorSpecialities?: DoctorSpecialityUncheckedUpdateManyWithoutSpecialityNestedInput
  }

  export type SpecialityCreateManyInput = {
    code?: number
    name: string
    description: string
  }

  export type SpecialityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialityUncheckedUpdateManyInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    consult?: ConsultCreateNestedOneWithoutAppointmentInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    patient: PatientCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    doctorId: number
    patientId: number
    consult?: ConsultUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    consult?: ConsultUpdateOneWithoutAppointmentNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    consult?: ConsultUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: number
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    doctorId: number
    patientId: number
  }

  export type AppointmentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultCreateInput = {
    diagnosis: string
    observations: string
    appointment: AppointmentCreateNestedOneWithoutConsultInput
    treatment: TreatmentCreateNestedOneWithoutConsultInput
  }

  export type ConsultUncheckedCreateInput = {
    id?: number
    diagnosis: string
    observations: string
    appointmentId: number
    treatmentId: number
  }

  export type ConsultUpdateInput = {
    diagnosis?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    appointment?: AppointmentUpdateOneRequiredWithoutConsultNestedInput
    treatment?: TreatmentUpdateOneRequiredWithoutConsultNestedInput
  }

  export type ConsultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    appointmentId?: IntFieldUpdateOperationsInput | number
    treatmentId?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultCreateManyInput = {
    id?: number
    diagnosis: string
    observations: string
    appointmentId: number
    treatmentId: number
  }

  export type ConsultUpdateManyMutationInput = {
    diagnosis?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    appointmentId?: IntFieldUpdateOperationsInput | number
    treatmentId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentCreateInput = {
    dose: Decimal | DecimalJsLike | number | string
    frequency: number
    frequencyUnit?: $Enums.TimeUnit
    duration: number
    durationUnit?: $Enums.TimeUnit
    observations: string
    consult?: ConsultCreateNestedOneWithoutTreatmentInput
    treatmentMedicine?: TreatmentMedicineCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentUncheckedCreateInput = {
    id?: number
    dose: Decimal | DecimalJsLike | number | string
    frequency: number
    frequencyUnit?: $Enums.TimeUnit
    duration: number
    durationUnit?: $Enums.TimeUnit
    observations: string
    consult?: ConsultUncheckedCreateNestedOneWithoutTreatmentInput
    treatmentMedicine?: TreatmentMedicineUncheckedCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentUpdateInput = {
    dose?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: IntFieldUpdateOperationsInput | number
    frequencyUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    observations?: StringFieldUpdateOperationsInput | string
    consult?: ConsultUpdateOneWithoutTreatmentNestedInput
    treatmentMedicine?: TreatmentMedicineUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dose?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: IntFieldUpdateOperationsInput | number
    frequencyUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    observations?: StringFieldUpdateOperationsInput | string
    consult?: ConsultUncheckedUpdateOneWithoutTreatmentNestedInput
    treatmentMedicine?: TreatmentMedicineUncheckedUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentCreateManyInput = {
    id?: number
    dose: Decimal | DecimalJsLike | number | string
    frequency: number
    frequencyUnit?: $Enums.TimeUnit
    duration: number
    durationUnit?: $Enums.TimeUnit
    observations: string
  }

  export type TreatmentUpdateManyMutationInput = {
    dose?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: IntFieldUpdateOperationsInput | number
    frequencyUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type TreatmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dose?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: IntFieldUpdateOperationsInput | number
    frequencyUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    observations?: StringFieldUpdateOperationsInput | string
  }

  export type TreatmentMedicineCreateInput = {
    treatment: TreatmentCreateNestedOneWithoutTreatmentMedicineInput
    medicine: MedicineCreateNestedOneWithoutTreatmentMedicineInput
  }

  export type TreatmentMedicineUncheckedCreateInput = {
    id?: number
    treatmentId: number
    medicineId: number
  }

  export type TreatmentMedicineUpdateInput = {
    treatment?: TreatmentUpdateOneRequiredWithoutTreatmentMedicineNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutTreatmentMedicineNestedInput
  }

  export type TreatmentMedicineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    treatmentId?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentMedicineCreateManyInput = {
    id?: number
    treatmentId: number
    medicineId: number
  }

  export type TreatmentMedicineUpdateManyMutationInput = {

  }

  export type TreatmentMedicineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    treatmentId?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineCreateInput = {
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    treatmentMedicine?: TreatmentMedicineCreateNestedManyWithoutMedicineInput
    terapeuticCategory: TerapeuticCategoryCreateNestedOneWithoutMedicinesInput
    pharmaceuticalForm: PharmaceuticalFormCreateNestedOneWithoutMedicinesInput
  }

  export type MedicineUncheckedCreateInput = {
    id?: number
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    teraputicCategoryid: number
    pharmaceuticalFormid: number
    treatmentMedicine?: TreatmentMedicineUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    treatmentMedicine?: TreatmentMedicineUpdateManyWithoutMedicineNestedInput
    terapeuticCategory?: TerapeuticCategoryUpdateOneRequiredWithoutMedicinesNestedInput
    pharmaceuticalForm?: PharmaceuticalFormUpdateOneRequiredWithoutMedicinesNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    teraputicCategoryid?: IntFieldUpdateOperationsInput | number
    pharmaceuticalFormid?: IntFieldUpdateOperationsInput | number
    treatmentMedicine?: TreatmentMedicineUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateManyInput = {
    id?: number
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    teraputicCategoryid: number
    pharmaceuticalFormid: number
  }

  export type MedicineUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    teraputicCategoryid?: IntFieldUpdateOperationsInput | number
    pharmaceuticalFormid?: IntFieldUpdateOperationsInput | number
  }

  export type TerapeuticCategoryCreateInput = {
    name: string
    medicines?: MedicineCreateNestedManyWithoutTerapeuticCategoryInput
  }

  export type TerapeuticCategoryUncheckedCreateInput = {
    id?: number
    name: string
    medicines?: MedicineUncheckedCreateNestedManyWithoutTerapeuticCategoryInput
  }

  export type TerapeuticCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    medicines?: MedicineUpdateManyWithoutTerapeuticCategoryNestedInput
  }

  export type TerapeuticCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    medicines?: MedicineUncheckedUpdateManyWithoutTerapeuticCategoryNestedInput
  }

  export type TerapeuticCategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type TerapeuticCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TerapeuticCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PharmaceuticalFormCreateInput = {
    name: string
    medicines?: MedicineCreateNestedManyWithoutPharmaceuticalFormInput
  }

  export type PharmaceuticalFormUncheckedCreateInput = {
    id?: number
    name: string
    medicines?: MedicineUncheckedCreateNestedManyWithoutPharmaceuticalFormInput
  }

  export type PharmaceuticalFormUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    medicines?: MedicineUpdateManyWithoutPharmaceuticalFormNestedInput
  }

  export type PharmaceuticalFormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    medicines?: MedicineUncheckedUpdateManyWithoutPharmaceuticalFormNestedInput
  }

  export type PharmaceuticalFormCreateManyInput = {
    id?: number
    name: string
  }

  export type PharmaceuticalFormUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PharmaceuticalFormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumBloodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodTypeFilter<$PrismaModel> | $Enums.BloodType
  }

  export type PatientAllergyListRelationFilter = {
    every?: PatientAllergyWhereInput
    some?: PatientAllergyWhereInput
    none?: PatientAllergyWhereInput
  }

  export type HospitalizationListRelationFilter = {
    every?: HospitalizationWhereInput
    some?: HospitalizationWhereInput
    none?: HospitalizationWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type PatientAllergyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HospitalizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    insurance_num?: SortOrder
    name?: SortOrder
    paternalSurname?: SortOrder
    maternalSurname?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    bloodType?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
    insurance_num?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    insurance_num?: SortOrder
    name?: SortOrder
    paternalSurname?: SortOrder
    maternalSurname?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    bloodType?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    insurance_num?: SortOrder
    name?: SortOrder
    paternalSurname?: SortOrder
    maternalSurname?: SortOrder
    dateOfBirth?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    bloodType?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
    insurance_num?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumBloodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel> | $Enums.BloodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodTypeFilter<$PrismaModel>
    _max?: NestedEnumBloodTypeFilter<$PrismaModel>
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type AllergyScalarRelationFilter = {
    is?: AllergyWhereInput
    isNot?: AllergyWhereInput
  }

  export type PatientAllergyCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    allergyId?: SortOrder
  }

  export type PatientAllergyAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    allergyId?: SortOrder
  }

  export type PatientAllergyMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    allergyId?: SortOrder
  }

  export type PatientAllergyMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    allergyId?: SortOrder
  }

  export type PatientAllergySumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    allergyId?: SortOrder
  }

  export type AllergyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AllergyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AllergyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AllergyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AllergySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HospitalizationCountOrderByAggregateInput = {
    id?: SortOrder
    entryDate?: SortOrder
    dischargeDate?: SortOrder
    reason?: SortOrder
    patientId?: SortOrder
    roomNumber?: SortOrder
  }

  export type HospitalizationAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    roomNumber?: SortOrder
  }

  export type HospitalizationMaxOrderByAggregateInput = {
    id?: SortOrder
    entryDate?: SortOrder
    dischargeDate?: SortOrder
    reason?: SortOrder
    patientId?: SortOrder
    roomNumber?: SortOrder
  }

  export type HospitalizationMinOrderByAggregateInput = {
    id?: SortOrder
    entryDate?: SortOrder
    dischargeDate?: SortOrder
    reason?: SortOrder
    patientId?: SortOrder
    roomNumber?: SortOrder
  }

  export type HospitalizationSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    roomNumber?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoomTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeFilter<$PrismaModel> | $Enums.RoomType
  }

  export type EnumRoomStateFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomState | EnumRoomStateFieldRefInput<$PrismaModel>
    in?: $Enums.RoomState[] | ListEnumRoomStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomState[] | ListEnumRoomStateFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStateFilter<$PrismaModel> | $Enums.RoomState
  }

  export type RoomCountOrderByAggregateInput = {
    number?: SortOrder
    type?: SortOrder
    floor?: SortOrder
    state?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    number?: SortOrder
    type?: SortOrder
    floor?: SortOrder
    state?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    number?: SortOrder
    type?: SortOrder
    floor?: SortOrder
    state?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type EnumRoomTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoomType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomTypeFilter<$PrismaModel>
    _max?: NestedEnumRoomTypeFilter<$PrismaModel>
  }

  export type EnumRoomStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomState | EnumRoomStateFieldRefInput<$PrismaModel>
    in?: $Enums.RoomState[] | ListEnumRoomStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomState[] | ListEnumRoomStateFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStateWithAggregatesFilter<$PrismaModel> | $Enums.RoomState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStateFilter<$PrismaModel>
    _max?: NestedEnumRoomStateFilter<$PrismaModel>
  }

  export type DoctorSpecialityListRelationFilter = {
    every?: DoctorSpecialityWhereInput
    some?: DoctorSpecialityWhereInput
    none?: DoctorSpecialityWhereInput
  }

  export type DoctorSpecialityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    professionalID?: SortOrder
    name?: SortOrder
    paternalSurname?: SortOrder
    maternalSurname?: SortOrder
    yearsOfExp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    id?: SortOrder
    yearsOfExp?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    professionalID?: SortOrder
    name?: SortOrder
    paternalSurname?: SortOrder
    maternalSurname?: SortOrder
    yearsOfExp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    professionalID?: SortOrder
    name?: SortOrder
    paternalSurname?: SortOrder
    maternalSurname?: SortOrder
    yearsOfExp?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    id?: SortOrder
    yearsOfExp?: SortOrder
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type SpecialityScalarRelationFilter = {
    is?: SpecialityWhereInput
    isNot?: SpecialityWhereInput
  }

  export type DoctorSpecialityCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    specialityId?: SortOrder
  }

  export type DoctorSpecialityAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    specialityId?: SortOrder
  }

  export type DoctorSpecialityMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    specialityId?: SortOrder
  }

  export type DoctorSpecialityMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    specialityId?: SortOrder
  }

  export type DoctorSpecialitySumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    specialityId?: SortOrder
  }

  export type SpecialityCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SpecialityAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type SpecialityMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SpecialityMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type SpecialitySumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type EnumAppointmentStateFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentState | EnumAppointmentStateFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentState[] | ListEnumAppointmentStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentState[] | ListEnumAppointmentStateFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStateFilter<$PrismaModel> | $Enums.AppointmentState
  }

  export type ConsultNullableScalarRelationFilter = {
    is?: ConsultWhereInput | null
    isNot?: ConsultWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    state?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    state?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    reason?: SortOrder
    state?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
  }

  export type EnumAppointmentStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentState | EnumAppointmentStateFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentState[] | ListEnumAppointmentStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentState[] | ListEnumAppointmentStateFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStateWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStateFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStateFilter<$PrismaModel>
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type TreatmentScalarRelationFilter = {
    is?: TreatmentWhereInput
    isNot?: TreatmentWhereInput
  }

  export type ConsultCountOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    observations?: SortOrder
    appointmentId?: SortOrder
    treatmentId?: SortOrder
  }

  export type ConsultAvgOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    treatmentId?: SortOrder
  }

  export type ConsultMaxOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    observations?: SortOrder
    appointmentId?: SortOrder
    treatmentId?: SortOrder
  }

  export type ConsultMinOrderByAggregateInput = {
    id?: SortOrder
    diagnosis?: SortOrder
    observations?: SortOrder
    appointmentId?: SortOrder
    treatmentId?: SortOrder
  }

  export type ConsultSumOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    treatmentId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumTimeUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeUnit | EnumTimeUnitFieldRefInput<$PrismaModel>
    in?: $Enums.TimeUnit[] | ListEnumTimeUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeUnit[] | ListEnumTimeUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeUnitFilter<$PrismaModel> | $Enums.TimeUnit
  }

  export type TreatmentMedicineListRelationFilter = {
    every?: TreatmentMedicineWhereInput
    some?: TreatmentMedicineWhereInput
    none?: TreatmentMedicineWhereInput
  }

  export type TreatmentMedicineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreatmentCountOrderByAggregateInput = {
    id?: SortOrder
    dose?: SortOrder
    frequency?: SortOrder
    frequencyUnit?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
    observations?: SortOrder
  }

  export type TreatmentAvgOrderByAggregateInput = {
    id?: SortOrder
    dose?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
  }

  export type TreatmentMaxOrderByAggregateInput = {
    id?: SortOrder
    dose?: SortOrder
    frequency?: SortOrder
    frequencyUnit?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
    observations?: SortOrder
  }

  export type TreatmentMinOrderByAggregateInput = {
    id?: SortOrder
    dose?: SortOrder
    frequency?: SortOrder
    frequencyUnit?: SortOrder
    duration?: SortOrder
    durationUnit?: SortOrder
    observations?: SortOrder
  }

  export type TreatmentSumOrderByAggregateInput = {
    id?: SortOrder
    dose?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTimeUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeUnit | EnumTimeUnitFieldRefInput<$PrismaModel>
    in?: $Enums.TimeUnit[] | ListEnumTimeUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeUnit[] | ListEnumTimeUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeUnitWithAggregatesFilter<$PrismaModel> | $Enums.TimeUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeUnitFilter<$PrismaModel>
    _max?: NestedEnumTimeUnitFilter<$PrismaModel>
  }

  export type MedicineScalarRelationFilter = {
    is?: MedicineWhereInput
    isNot?: MedicineWhereInput
  }

  export type TreatmentMedicineCountOrderByAggregateInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    medicineId?: SortOrder
  }

  export type TreatmentMedicineAvgOrderByAggregateInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    medicineId?: SortOrder
  }

  export type TreatmentMedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    medicineId?: SortOrder
  }

  export type TreatmentMedicineMinOrderByAggregateInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    medicineId?: SortOrder
  }

  export type TreatmentMedicineSumOrderByAggregateInput = {
    id?: SortOrder
    treatmentId?: SortOrder
    medicineId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TerapeuticCategoryScalarRelationFilter = {
    is?: TerapeuticCategoryWhereInput
    isNot?: TerapeuticCategoryWhereInput
  }

  export type PharmaceuticalFormScalarRelationFilter = {
    is?: PharmaceuticalFormWhereInput
    isNot?: PharmaceuticalFormWhereInput
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    tradeName?: SortOrder
    activeIngredient?: SortOrder
    laboratory?: SortOrder
    contraindications?: SortOrder
    concentration?: SortOrder
    recommendedDosage?: SortOrder
    teraputicCategoryid?: SortOrder
    pharmaceuticalFormid?: SortOrder
  }

  export type MedicineAvgOrderByAggregateInput = {
    id?: SortOrder
    concentration?: SortOrder
    recommendedDosage?: SortOrder
    teraputicCategoryid?: SortOrder
    pharmaceuticalFormid?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    tradeName?: SortOrder
    activeIngredient?: SortOrder
    laboratory?: SortOrder
    contraindications?: SortOrder
    concentration?: SortOrder
    recommendedDosage?: SortOrder
    teraputicCategoryid?: SortOrder
    pharmaceuticalFormid?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    tradeName?: SortOrder
    activeIngredient?: SortOrder
    laboratory?: SortOrder
    contraindications?: SortOrder
    concentration?: SortOrder
    recommendedDosage?: SortOrder
    teraputicCategoryid?: SortOrder
    pharmaceuticalFormid?: SortOrder
  }

  export type MedicineSumOrderByAggregateInput = {
    id?: SortOrder
    concentration?: SortOrder
    recommendedDosage?: SortOrder
    teraputicCategoryid?: SortOrder
    pharmaceuticalFormid?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MedicineListRelationFilter = {
    every?: MedicineWhereInput
    some?: MedicineWhereInput
    none?: MedicineWhereInput
  }

  export type MedicineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TerapeuticCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TerapeuticCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TerapeuticCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TerapeuticCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TerapeuticCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PharmaceuticalFormCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PharmaceuticalFormAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PharmaceuticalFormMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PharmaceuticalFormMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PharmaceuticalFormSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PatientAllergyCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientAllergyCreateWithoutPatientInput, PatientAllergyUncheckedCreateWithoutPatientInput> | PatientAllergyCreateWithoutPatientInput[] | PatientAllergyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientAllergyCreateOrConnectWithoutPatientInput | PatientAllergyCreateOrConnectWithoutPatientInput[]
    createMany?: PatientAllergyCreateManyPatientInputEnvelope
    connect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
  }

  export type HospitalizationCreateNestedManyWithoutPatientInput = {
    create?: XOR<HospitalizationCreateWithoutPatientInput, HospitalizationUncheckedCreateWithoutPatientInput> | HospitalizationCreateWithoutPatientInput[] | HospitalizationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HospitalizationCreateOrConnectWithoutPatientInput | HospitalizationCreateOrConnectWithoutPatientInput[]
    createMany?: HospitalizationCreateManyPatientInputEnvelope
    connect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PatientAllergyUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientAllergyCreateWithoutPatientInput, PatientAllergyUncheckedCreateWithoutPatientInput> | PatientAllergyCreateWithoutPatientInput[] | PatientAllergyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientAllergyCreateOrConnectWithoutPatientInput | PatientAllergyCreateOrConnectWithoutPatientInput[]
    createMany?: PatientAllergyCreateManyPatientInputEnvelope
    connect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
  }

  export type HospitalizationUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<HospitalizationCreateWithoutPatientInput, HospitalizationUncheckedCreateWithoutPatientInput> | HospitalizationCreateWithoutPatientInput[] | HospitalizationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HospitalizationCreateOrConnectWithoutPatientInput | HospitalizationCreateOrConnectWithoutPatientInput[]
    createMany?: HospitalizationCreateManyPatientInputEnvelope
    connect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumBloodTypeFieldUpdateOperationsInput = {
    set?: $Enums.BloodType
  }

  export type PatientAllergyUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientAllergyCreateWithoutPatientInput, PatientAllergyUncheckedCreateWithoutPatientInput> | PatientAllergyCreateWithoutPatientInput[] | PatientAllergyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientAllergyCreateOrConnectWithoutPatientInput | PatientAllergyCreateOrConnectWithoutPatientInput[]
    upsert?: PatientAllergyUpsertWithWhereUniqueWithoutPatientInput | PatientAllergyUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientAllergyCreateManyPatientInputEnvelope
    set?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    disconnect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    delete?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    connect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    update?: PatientAllergyUpdateWithWhereUniqueWithoutPatientInput | PatientAllergyUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientAllergyUpdateManyWithWhereWithoutPatientInput | PatientAllergyUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientAllergyScalarWhereInput | PatientAllergyScalarWhereInput[]
  }

  export type HospitalizationUpdateManyWithoutPatientNestedInput = {
    create?: XOR<HospitalizationCreateWithoutPatientInput, HospitalizationUncheckedCreateWithoutPatientInput> | HospitalizationCreateWithoutPatientInput[] | HospitalizationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HospitalizationCreateOrConnectWithoutPatientInput | HospitalizationCreateOrConnectWithoutPatientInput[]
    upsert?: HospitalizationUpsertWithWhereUniqueWithoutPatientInput | HospitalizationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: HospitalizationCreateManyPatientInputEnvelope
    set?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    disconnect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    delete?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    connect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    update?: HospitalizationUpdateWithWhereUniqueWithoutPatientInput | HospitalizationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: HospitalizationUpdateManyWithWhereWithoutPatientInput | HospitalizationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: HospitalizationScalarWhereInput | HospitalizationScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PatientAllergyUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientAllergyCreateWithoutPatientInput, PatientAllergyUncheckedCreateWithoutPatientInput> | PatientAllergyCreateWithoutPatientInput[] | PatientAllergyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientAllergyCreateOrConnectWithoutPatientInput | PatientAllergyCreateOrConnectWithoutPatientInput[]
    upsert?: PatientAllergyUpsertWithWhereUniqueWithoutPatientInput | PatientAllergyUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientAllergyCreateManyPatientInputEnvelope
    set?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    disconnect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    delete?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    connect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    update?: PatientAllergyUpdateWithWhereUniqueWithoutPatientInput | PatientAllergyUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientAllergyUpdateManyWithWhereWithoutPatientInput | PatientAllergyUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientAllergyScalarWhereInput | PatientAllergyScalarWhereInput[]
  }

  export type HospitalizationUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<HospitalizationCreateWithoutPatientInput, HospitalizationUncheckedCreateWithoutPatientInput> | HospitalizationCreateWithoutPatientInput[] | HospitalizationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HospitalizationCreateOrConnectWithoutPatientInput | HospitalizationCreateOrConnectWithoutPatientInput[]
    upsert?: HospitalizationUpsertWithWhereUniqueWithoutPatientInput | HospitalizationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: HospitalizationCreateManyPatientInputEnvelope
    set?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    disconnect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    delete?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    connect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    update?: HospitalizationUpdateWithWhereUniqueWithoutPatientInput | HospitalizationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: HospitalizationUpdateManyWithWhereWithoutPatientInput | HospitalizationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: HospitalizationScalarWhereInput | HospitalizationScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutAllergyInput = {
    create?: XOR<PatientCreateWithoutAllergyInput, PatientUncheckedCreateWithoutAllergyInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAllergyInput
    connect?: PatientWhereUniqueInput
  }

  export type AllergyCreateNestedOneWithoutPatientAllergiesInput = {
    create?: XOR<AllergyCreateWithoutPatientAllergiesInput, AllergyUncheckedCreateWithoutPatientAllergiesInput>
    connectOrCreate?: AllergyCreateOrConnectWithoutPatientAllergiesInput
    connect?: AllergyWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutAllergyNestedInput = {
    create?: XOR<PatientCreateWithoutAllergyInput, PatientUncheckedCreateWithoutAllergyInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAllergyInput
    upsert?: PatientUpsertWithoutAllergyInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAllergyInput, PatientUpdateWithoutAllergyInput>, PatientUncheckedUpdateWithoutAllergyInput>
  }

  export type AllergyUpdateOneRequiredWithoutPatientAllergiesNestedInput = {
    create?: XOR<AllergyCreateWithoutPatientAllergiesInput, AllergyUncheckedCreateWithoutPatientAllergiesInput>
    connectOrCreate?: AllergyCreateOrConnectWithoutPatientAllergiesInput
    upsert?: AllergyUpsertWithoutPatientAllergiesInput
    connect?: AllergyWhereUniqueInput
    update?: XOR<XOR<AllergyUpdateToOneWithWhereWithoutPatientAllergiesInput, AllergyUpdateWithoutPatientAllergiesInput>, AllergyUncheckedUpdateWithoutPatientAllergiesInput>
  }

  export type PatientAllergyCreateNestedManyWithoutAllergyInput = {
    create?: XOR<PatientAllergyCreateWithoutAllergyInput, PatientAllergyUncheckedCreateWithoutAllergyInput> | PatientAllergyCreateWithoutAllergyInput[] | PatientAllergyUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: PatientAllergyCreateOrConnectWithoutAllergyInput | PatientAllergyCreateOrConnectWithoutAllergyInput[]
    createMany?: PatientAllergyCreateManyAllergyInputEnvelope
    connect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
  }

  export type PatientAllergyUncheckedCreateNestedManyWithoutAllergyInput = {
    create?: XOR<PatientAllergyCreateWithoutAllergyInput, PatientAllergyUncheckedCreateWithoutAllergyInput> | PatientAllergyCreateWithoutAllergyInput[] | PatientAllergyUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: PatientAllergyCreateOrConnectWithoutAllergyInput | PatientAllergyCreateOrConnectWithoutAllergyInput[]
    createMany?: PatientAllergyCreateManyAllergyInputEnvelope
    connect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
  }

  export type PatientAllergyUpdateManyWithoutAllergyNestedInput = {
    create?: XOR<PatientAllergyCreateWithoutAllergyInput, PatientAllergyUncheckedCreateWithoutAllergyInput> | PatientAllergyCreateWithoutAllergyInput[] | PatientAllergyUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: PatientAllergyCreateOrConnectWithoutAllergyInput | PatientAllergyCreateOrConnectWithoutAllergyInput[]
    upsert?: PatientAllergyUpsertWithWhereUniqueWithoutAllergyInput | PatientAllergyUpsertWithWhereUniqueWithoutAllergyInput[]
    createMany?: PatientAllergyCreateManyAllergyInputEnvelope
    set?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    disconnect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    delete?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    connect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    update?: PatientAllergyUpdateWithWhereUniqueWithoutAllergyInput | PatientAllergyUpdateWithWhereUniqueWithoutAllergyInput[]
    updateMany?: PatientAllergyUpdateManyWithWhereWithoutAllergyInput | PatientAllergyUpdateManyWithWhereWithoutAllergyInput[]
    deleteMany?: PatientAllergyScalarWhereInput | PatientAllergyScalarWhereInput[]
  }

  export type PatientAllergyUncheckedUpdateManyWithoutAllergyNestedInput = {
    create?: XOR<PatientAllergyCreateWithoutAllergyInput, PatientAllergyUncheckedCreateWithoutAllergyInput> | PatientAllergyCreateWithoutAllergyInput[] | PatientAllergyUncheckedCreateWithoutAllergyInput[]
    connectOrCreate?: PatientAllergyCreateOrConnectWithoutAllergyInput | PatientAllergyCreateOrConnectWithoutAllergyInput[]
    upsert?: PatientAllergyUpsertWithWhereUniqueWithoutAllergyInput | PatientAllergyUpsertWithWhereUniqueWithoutAllergyInput[]
    createMany?: PatientAllergyCreateManyAllergyInputEnvelope
    set?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    disconnect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    delete?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    connect?: PatientAllergyWhereUniqueInput | PatientAllergyWhereUniqueInput[]
    update?: PatientAllergyUpdateWithWhereUniqueWithoutAllergyInput | PatientAllergyUpdateWithWhereUniqueWithoutAllergyInput[]
    updateMany?: PatientAllergyUpdateManyWithWhereWithoutAllergyInput | PatientAllergyUpdateManyWithWhereWithoutAllergyInput[]
    deleteMany?: PatientAllergyScalarWhereInput | PatientAllergyScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutHospitalizationsInput = {
    create?: XOR<PatientCreateWithoutHospitalizationsInput, PatientUncheckedCreateWithoutHospitalizationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutHospitalizationsInput
    connect?: PatientWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutHospitalizationsInput = {
    create?: XOR<RoomCreateWithoutHospitalizationsInput, RoomUncheckedCreateWithoutHospitalizationsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutHospitalizationsInput
    connect?: RoomWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatientUpdateOneRequiredWithoutHospitalizationsNestedInput = {
    create?: XOR<PatientCreateWithoutHospitalizationsInput, PatientUncheckedCreateWithoutHospitalizationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutHospitalizationsInput
    upsert?: PatientUpsertWithoutHospitalizationsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutHospitalizationsInput, PatientUpdateWithoutHospitalizationsInput>, PatientUncheckedUpdateWithoutHospitalizationsInput>
  }

  export type RoomUpdateOneRequiredWithoutHospitalizationsNestedInput = {
    create?: XOR<RoomCreateWithoutHospitalizationsInput, RoomUncheckedCreateWithoutHospitalizationsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutHospitalizationsInput
    upsert?: RoomUpsertWithoutHospitalizationsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutHospitalizationsInput, RoomUpdateWithoutHospitalizationsInput>, RoomUncheckedUpdateWithoutHospitalizationsInput>
  }

  export type HospitalizationCreateNestedManyWithoutRoomInput = {
    create?: XOR<HospitalizationCreateWithoutRoomInput, HospitalizationUncheckedCreateWithoutRoomInput> | HospitalizationCreateWithoutRoomInput[] | HospitalizationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: HospitalizationCreateOrConnectWithoutRoomInput | HospitalizationCreateOrConnectWithoutRoomInput[]
    createMany?: HospitalizationCreateManyRoomInputEnvelope
    connect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
  }

  export type HospitalizationUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<HospitalizationCreateWithoutRoomInput, HospitalizationUncheckedCreateWithoutRoomInput> | HospitalizationCreateWithoutRoomInput[] | HospitalizationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: HospitalizationCreateOrConnectWithoutRoomInput | HospitalizationCreateOrConnectWithoutRoomInput[]
    createMany?: HospitalizationCreateManyRoomInputEnvelope
    connect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
  }

  export type EnumRoomTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoomType
  }

  export type EnumRoomStateFieldUpdateOperationsInput = {
    set?: $Enums.RoomState
  }

  export type HospitalizationUpdateManyWithoutRoomNestedInput = {
    create?: XOR<HospitalizationCreateWithoutRoomInput, HospitalizationUncheckedCreateWithoutRoomInput> | HospitalizationCreateWithoutRoomInput[] | HospitalizationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: HospitalizationCreateOrConnectWithoutRoomInput | HospitalizationCreateOrConnectWithoutRoomInput[]
    upsert?: HospitalizationUpsertWithWhereUniqueWithoutRoomInput | HospitalizationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: HospitalizationCreateManyRoomInputEnvelope
    set?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    disconnect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    delete?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    connect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    update?: HospitalizationUpdateWithWhereUniqueWithoutRoomInput | HospitalizationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: HospitalizationUpdateManyWithWhereWithoutRoomInput | HospitalizationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: HospitalizationScalarWhereInput | HospitalizationScalarWhereInput[]
  }

  export type HospitalizationUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<HospitalizationCreateWithoutRoomInput, HospitalizationUncheckedCreateWithoutRoomInput> | HospitalizationCreateWithoutRoomInput[] | HospitalizationUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: HospitalizationCreateOrConnectWithoutRoomInput | HospitalizationCreateOrConnectWithoutRoomInput[]
    upsert?: HospitalizationUpsertWithWhereUniqueWithoutRoomInput | HospitalizationUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: HospitalizationCreateManyRoomInputEnvelope
    set?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    disconnect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    delete?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    connect?: HospitalizationWhereUniqueInput | HospitalizationWhereUniqueInput[]
    update?: HospitalizationUpdateWithWhereUniqueWithoutRoomInput | HospitalizationUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: HospitalizationUpdateManyWithWhereWithoutRoomInput | HospitalizationUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: HospitalizationScalarWhereInput | HospitalizationScalarWhereInput[]
  }

  export type DoctorSpecialityCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSpecialityCreateWithoutDoctorInput, DoctorSpecialityUncheckedCreateWithoutDoctorInput> | DoctorSpecialityCreateWithoutDoctorInput[] | DoctorSpecialityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialityCreateOrConnectWithoutDoctorInput | DoctorSpecialityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSpecialityCreateManyDoctorInputEnvelope
    connect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DoctorSpecialityUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSpecialityCreateWithoutDoctorInput, DoctorSpecialityUncheckedCreateWithoutDoctorInput> | DoctorSpecialityCreateWithoutDoctorInput[] | DoctorSpecialityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialityCreateOrConnectWithoutDoctorInput | DoctorSpecialityCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSpecialityCreateManyDoctorInputEnvelope
    connect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type DoctorSpecialityUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSpecialityCreateWithoutDoctorInput, DoctorSpecialityUncheckedCreateWithoutDoctorInput> | DoctorSpecialityCreateWithoutDoctorInput[] | DoctorSpecialityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialityCreateOrConnectWithoutDoctorInput | DoctorSpecialityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSpecialityUpsertWithWhereUniqueWithoutDoctorInput | DoctorSpecialityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSpecialityCreateManyDoctorInputEnvelope
    set?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    disconnect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    delete?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    connect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    update?: DoctorSpecialityUpdateWithWhereUniqueWithoutDoctorInput | DoctorSpecialityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSpecialityUpdateManyWithWhereWithoutDoctorInput | DoctorSpecialityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSpecialityScalarWhereInput | DoctorSpecialityScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DoctorSpecialityUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSpecialityCreateWithoutDoctorInput, DoctorSpecialityUncheckedCreateWithoutDoctorInput> | DoctorSpecialityCreateWithoutDoctorInput[] | DoctorSpecialityUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialityCreateOrConnectWithoutDoctorInput | DoctorSpecialityCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSpecialityUpsertWithWhereUniqueWithoutDoctorInput | DoctorSpecialityUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSpecialityCreateManyDoctorInputEnvelope
    set?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    disconnect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    delete?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    connect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    update?: DoctorSpecialityUpdateWithWhereUniqueWithoutDoctorInput | DoctorSpecialityUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSpecialityUpdateManyWithWhereWithoutDoctorInput | DoctorSpecialityUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSpecialityScalarWhereInput | DoctorSpecialityScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type DoctorCreateNestedOneWithoutDoctorSpecialityInput = {
    create?: XOR<DoctorCreateWithoutDoctorSpecialityInput, DoctorUncheckedCreateWithoutDoctorSpecialityInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSpecialityInput
    connect?: DoctorWhereUniqueInput
  }

  export type SpecialityCreateNestedOneWithoutDoctorSpecialitiesInput = {
    create?: XOR<SpecialityCreateWithoutDoctorSpecialitiesInput, SpecialityUncheckedCreateWithoutDoctorSpecialitiesInput>
    connectOrCreate?: SpecialityCreateOrConnectWithoutDoctorSpecialitiesInput
    connect?: SpecialityWhereUniqueInput
  }

  export type DoctorUpdateOneRequiredWithoutDoctorSpecialityNestedInput = {
    create?: XOR<DoctorCreateWithoutDoctorSpecialityInput, DoctorUncheckedCreateWithoutDoctorSpecialityInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSpecialityInput
    upsert?: DoctorUpsertWithoutDoctorSpecialityInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutDoctorSpecialityInput, DoctorUpdateWithoutDoctorSpecialityInput>, DoctorUncheckedUpdateWithoutDoctorSpecialityInput>
  }

  export type SpecialityUpdateOneRequiredWithoutDoctorSpecialitiesNestedInput = {
    create?: XOR<SpecialityCreateWithoutDoctorSpecialitiesInput, SpecialityUncheckedCreateWithoutDoctorSpecialitiesInput>
    connectOrCreate?: SpecialityCreateOrConnectWithoutDoctorSpecialitiesInput
    upsert?: SpecialityUpsertWithoutDoctorSpecialitiesInput
    connect?: SpecialityWhereUniqueInput
    update?: XOR<XOR<SpecialityUpdateToOneWithWhereWithoutDoctorSpecialitiesInput, SpecialityUpdateWithoutDoctorSpecialitiesInput>, SpecialityUncheckedUpdateWithoutDoctorSpecialitiesInput>
  }

  export type DoctorSpecialityCreateNestedManyWithoutSpecialityInput = {
    create?: XOR<DoctorSpecialityCreateWithoutSpecialityInput, DoctorSpecialityUncheckedCreateWithoutSpecialityInput> | DoctorSpecialityCreateWithoutSpecialityInput[] | DoctorSpecialityUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: DoctorSpecialityCreateOrConnectWithoutSpecialityInput | DoctorSpecialityCreateOrConnectWithoutSpecialityInput[]
    createMany?: DoctorSpecialityCreateManySpecialityInputEnvelope
    connect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
  }

  export type DoctorSpecialityUncheckedCreateNestedManyWithoutSpecialityInput = {
    create?: XOR<DoctorSpecialityCreateWithoutSpecialityInput, DoctorSpecialityUncheckedCreateWithoutSpecialityInput> | DoctorSpecialityCreateWithoutSpecialityInput[] | DoctorSpecialityUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: DoctorSpecialityCreateOrConnectWithoutSpecialityInput | DoctorSpecialityCreateOrConnectWithoutSpecialityInput[]
    createMany?: DoctorSpecialityCreateManySpecialityInputEnvelope
    connect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
  }

  export type DoctorSpecialityUpdateManyWithoutSpecialityNestedInput = {
    create?: XOR<DoctorSpecialityCreateWithoutSpecialityInput, DoctorSpecialityUncheckedCreateWithoutSpecialityInput> | DoctorSpecialityCreateWithoutSpecialityInput[] | DoctorSpecialityUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: DoctorSpecialityCreateOrConnectWithoutSpecialityInput | DoctorSpecialityCreateOrConnectWithoutSpecialityInput[]
    upsert?: DoctorSpecialityUpsertWithWhereUniqueWithoutSpecialityInput | DoctorSpecialityUpsertWithWhereUniqueWithoutSpecialityInput[]
    createMany?: DoctorSpecialityCreateManySpecialityInputEnvelope
    set?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    disconnect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    delete?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    connect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    update?: DoctorSpecialityUpdateWithWhereUniqueWithoutSpecialityInput | DoctorSpecialityUpdateWithWhereUniqueWithoutSpecialityInput[]
    updateMany?: DoctorSpecialityUpdateManyWithWhereWithoutSpecialityInput | DoctorSpecialityUpdateManyWithWhereWithoutSpecialityInput[]
    deleteMany?: DoctorSpecialityScalarWhereInput | DoctorSpecialityScalarWhereInput[]
  }

  export type DoctorSpecialityUncheckedUpdateManyWithoutSpecialityNestedInput = {
    create?: XOR<DoctorSpecialityCreateWithoutSpecialityInput, DoctorSpecialityUncheckedCreateWithoutSpecialityInput> | DoctorSpecialityCreateWithoutSpecialityInput[] | DoctorSpecialityUncheckedCreateWithoutSpecialityInput[]
    connectOrCreate?: DoctorSpecialityCreateOrConnectWithoutSpecialityInput | DoctorSpecialityCreateOrConnectWithoutSpecialityInput[]
    upsert?: DoctorSpecialityUpsertWithWhereUniqueWithoutSpecialityInput | DoctorSpecialityUpsertWithWhereUniqueWithoutSpecialityInput[]
    createMany?: DoctorSpecialityCreateManySpecialityInputEnvelope
    set?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    disconnect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    delete?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    connect?: DoctorSpecialityWhereUniqueInput | DoctorSpecialityWhereUniqueInput[]
    update?: DoctorSpecialityUpdateWithWhereUniqueWithoutSpecialityInput | DoctorSpecialityUpdateWithWhereUniqueWithoutSpecialityInput[]
    updateMany?: DoctorSpecialityUpdateManyWithWhereWithoutSpecialityInput | DoctorSpecialityUpdateManyWithWhereWithoutSpecialityInput[]
    deleteMany?: DoctorSpecialityScalarWhereInput | DoctorSpecialityScalarWhereInput[]
  }

  export type ConsultCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ConsultCreateWithoutAppointmentInput, ConsultUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ConsultCreateOrConnectWithoutAppointmentInput
    connect?: ConsultWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type ConsultUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ConsultCreateWithoutAppointmentInput, ConsultUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ConsultCreateOrConnectWithoutAppointmentInput
    connect?: ConsultWhereUniqueInput
  }

  export type EnumAppointmentStateFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentState
  }

  export type ConsultUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ConsultCreateWithoutAppointmentInput, ConsultUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ConsultCreateOrConnectWithoutAppointmentInput
    upsert?: ConsultUpsertWithoutAppointmentInput
    disconnect?: ConsultWhereInput | boolean
    delete?: ConsultWhereInput | boolean
    connect?: ConsultWhereUniqueInput
    update?: XOR<XOR<ConsultUpdateToOneWithWhereWithoutAppointmentInput, ConsultUpdateWithoutAppointmentInput>, ConsultUncheckedUpdateWithoutAppointmentInput>
  }

  export type DoctorUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorUpsertWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAppointmentsInput, DoctorUpdateWithoutAppointmentsInput>, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientUpsertWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentsInput, PatientUpdateWithoutAppointmentsInput>, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ConsultUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ConsultCreateWithoutAppointmentInput, ConsultUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ConsultCreateOrConnectWithoutAppointmentInput
    upsert?: ConsultUpsertWithoutAppointmentInput
    disconnect?: ConsultWhereInput | boolean
    delete?: ConsultWhereInput | boolean
    connect?: ConsultWhereUniqueInput
    update?: XOR<XOR<ConsultUpdateToOneWithWhereWithoutAppointmentInput, ConsultUpdateWithoutAppointmentInput>, ConsultUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentCreateNestedOneWithoutConsultInput = {
    create?: XOR<AppointmentCreateWithoutConsultInput, AppointmentUncheckedCreateWithoutConsultInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutConsultInput
    connect?: AppointmentWhereUniqueInput
  }

  export type TreatmentCreateNestedOneWithoutConsultInput = {
    create?: XOR<TreatmentCreateWithoutConsultInput, TreatmentUncheckedCreateWithoutConsultInput>
    connectOrCreate?: TreatmentCreateOrConnectWithoutConsultInput
    connect?: TreatmentWhereUniqueInput
  }

  export type AppointmentUpdateOneRequiredWithoutConsultNestedInput = {
    create?: XOR<AppointmentCreateWithoutConsultInput, AppointmentUncheckedCreateWithoutConsultInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutConsultInput
    upsert?: AppointmentUpsertWithoutConsultInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutConsultInput, AppointmentUpdateWithoutConsultInput>, AppointmentUncheckedUpdateWithoutConsultInput>
  }

  export type TreatmentUpdateOneRequiredWithoutConsultNestedInput = {
    create?: XOR<TreatmentCreateWithoutConsultInput, TreatmentUncheckedCreateWithoutConsultInput>
    connectOrCreate?: TreatmentCreateOrConnectWithoutConsultInput
    upsert?: TreatmentUpsertWithoutConsultInput
    connect?: TreatmentWhereUniqueInput
    update?: XOR<XOR<TreatmentUpdateToOneWithWhereWithoutConsultInput, TreatmentUpdateWithoutConsultInput>, TreatmentUncheckedUpdateWithoutConsultInput>
  }

  export type ConsultCreateNestedOneWithoutTreatmentInput = {
    create?: XOR<ConsultCreateWithoutTreatmentInput, ConsultUncheckedCreateWithoutTreatmentInput>
    connectOrCreate?: ConsultCreateOrConnectWithoutTreatmentInput
    connect?: ConsultWhereUniqueInput
  }

  export type TreatmentMedicineCreateNestedManyWithoutTreatmentInput = {
    create?: XOR<TreatmentMedicineCreateWithoutTreatmentInput, TreatmentMedicineUncheckedCreateWithoutTreatmentInput> | TreatmentMedicineCreateWithoutTreatmentInput[] | TreatmentMedicineUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: TreatmentMedicineCreateOrConnectWithoutTreatmentInput | TreatmentMedicineCreateOrConnectWithoutTreatmentInput[]
    createMany?: TreatmentMedicineCreateManyTreatmentInputEnvelope
    connect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
  }

  export type ConsultUncheckedCreateNestedOneWithoutTreatmentInput = {
    create?: XOR<ConsultCreateWithoutTreatmentInput, ConsultUncheckedCreateWithoutTreatmentInput>
    connectOrCreate?: ConsultCreateOrConnectWithoutTreatmentInput
    connect?: ConsultWhereUniqueInput
  }

  export type TreatmentMedicineUncheckedCreateNestedManyWithoutTreatmentInput = {
    create?: XOR<TreatmentMedicineCreateWithoutTreatmentInput, TreatmentMedicineUncheckedCreateWithoutTreatmentInput> | TreatmentMedicineCreateWithoutTreatmentInput[] | TreatmentMedicineUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: TreatmentMedicineCreateOrConnectWithoutTreatmentInput | TreatmentMedicineCreateOrConnectWithoutTreatmentInput[]
    createMany?: TreatmentMedicineCreateManyTreatmentInputEnvelope
    connect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumTimeUnitFieldUpdateOperationsInput = {
    set?: $Enums.TimeUnit
  }

  export type ConsultUpdateOneWithoutTreatmentNestedInput = {
    create?: XOR<ConsultCreateWithoutTreatmentInput, ConsultUncheckedCreateWithoutTreatmentInput>
    connectOrCreate?: ConsultCreateOrConnectWithoutTreatmentInput
    upsert?: ConsultUpsertWithoutTreatmentInput
    disconnect?: ConsultWhereInput | boolean
    delete?: ConsultWhereInput | boolean
    connect?: ConsultWhereUniqueInput
    update?: XOR<XOR<ConsultUpdateToOneWithWhereWithoutTreatmentInput, ConsultUpdateWithoutTreatmentInput>, ConsultUncheckedUpdateWithoutTreatmentInput>
  }

  export type TreatmentMedicineUpdateManyWithoutTreatmentNestedInput = {
    create?: XOR<TreatmentMedicineCreateWithoutTreatmentInput, TreatmentMedicineUncheckedCreateWithoutTreatmentInput> | TreatmentMedicineCreateWithoutTreatmentInput[] | TreatmentMedicineUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: TreatmentMedicineCreateOrConnectWithoutTreatmentInput | TreatmentMedicineCreateOrConnectWithoutTreatmentInput[]
    upsert?: TreatmentMedicineUpsertWithWhereUniqueWithoutTreatmentInput | TreatmentMedicineUpsertWithWhereUniqueWithoutTreatmentInput[]
    createMany?: TreatmentMedicineCreateManyTreatmentInputEnvelope
    set?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    disconnect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    delete?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    connect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    update?: TreatmentMedicineUpdateWithWhereUniqueWithoutTreatmentInput | TreatmentMedicineUpdateWithWhereUniqueWithoutTreatmentInput[]
    updateMany?: TreatmentMedicineUpdateManyWithWhereWithoutTreatmentInput | TreatmentMedicineUpdateManyWithWhereWithoutTreatmentInput[]
    deleteMany?: TreatmentMedicineScalarWhereInput | TreatmentMedicineScalarWhereInput[]
  }

  export type ConsultUncheckedUpdateOneWithoutTreatmentNestedInput = {
    create?: XOR<ConsultCreateWithoutTreatmentInput, ConsultUncheckedCreateWithoutTreatmentInput>
    connectOrCreate?: ConsultCreateOrConnectWithoutTreatmentInput
    upsert?: ConsultUpsertWithoutTreatmentInput
    disconnect?: ConsultWhereInput | boolean
    delete?: ConsultWhereInput | boolean
    connect?: ConsultWhereUniqueInput
    update?: XOR<XOR<ConsultUpdateToOneWithWhereWithoutTreatmentInput, ConsultUpdateWithoutTreatmentInput>, ConsultUncheckedUpdateWithoutTreatmentInput>
  }

  export type TreatmentMedicineUncheckedUpdateManyWithoutTreatmentNestedInput = {
    create?: XOR<TreatmentMedicineCreateWithoutTreatmentInput, TreatmentMedicineUncheckedCreateWithoutTreatmentInput> | TreatmentMedicineCreateWithoutTreatmentInput[] | TreatmentMedicineUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: TreatmentMedicineCreateOrConnectWithoutTreatmentInput | TreatmentMedicineCreateOrConnectWithoutTreatmentInput[]
    upsert?: TreatmentMedicineUpsertWithWhereUniqueWithoutTreatmentInput | TreatmentMedicineUpsertWithWhereUniqueWithoutTreatmentInput[]
    createMany?: TreatmentMedicineCreateManyTreatmentInputEnvelope
    set?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    disconnect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    delete?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    connect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    update?: TreatmentMedicineUpdateWithWhereUniqueWithoutTreatmentInput | TreatmentMedicineUpdateWithWhereUniqueWithoutTreatmentInput[]
    updateMany?: TreatmentMedicineUpdateManyWithWhereWithoutTreatmentInput | TreatmentMedicineUpdateManyWithWhereWithoutTreatmentInput[]
    deleteMany?: TreatmentMedicineScalarWhereInput | TreatmentMedicineScalarWhereInput[]
  }

  export type TreatmentCreateNestedOneWithoutTreatmentMedicineInput = {
    create?: XOR<TreatmentCreateWithoutTreatmentMedicineInput, TreatmentUncheckedCreateWithoutTreatmentMedicineInput>
    connectOrCreate?: TreatmentCreateOrConnectWithoutTreatmentMedicineInput
    connect?: TreatmentWhereUniqueInput
  }

  export type MedicineCreateNestedOneWithoutTreatmentMedicineInput = {
    create?: XOR<MedicineCreateWithoutTreatmentMedicineInput, MedicineUncheckedCreateWithoutTreatmentMedicineInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutTreatmentMedicineInput
    connect?: MedicineWhereUniqueInput
  }

  export type TreatmentUpdateOneRequiredWithoutTreatmentMedicineNestedInput = {
    create?: XOR<TreatmentCreateWithoutTreatmentMedicineInput, TreatmentUncheckedCreateWithoutTreatmentMedicineInput>
    connectOrCreate?: TreatmentCreateOrConnectWithoutTreatmentMedicineInput
    upsert?: TreatmentUpsertWithoutTreatmentMedicineInput
    connect?: TreatmentWhereUniqueInput
    update?: XOR<XOR<TreatmentUpdateToOneWithWhereWithoutTreatmentMedicineInput, TreatmentUpdateWithoutTreatmentMedicineInput>, TreatmentUncheckedUpdateWithoutTreatmentMedicineInput>
  }

  export type MedicineUpdateOneRequiredWithoutTreatmentMedicineNestedInput = {
    create?: XOR<MedicineCreateWithoutTreatmentMedicineInput, MedicineUncheckedCreateWithoutTreatmentMedicineInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutTreatmentMedicineInput
    upsert?: MedicineUpsertWithoutTreatmentMedicineInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutTreatmentMedicineInput, MedicineUpdateWithoutTreatmentMedicineInput>, MedicineUncheckedUpdateWithoutTreatmentMedicineInput>
  }

  export type TreatmentMedicineCreateNestedManyWithoutMedicineInput = {
    create?: XOR<TreatmentMedicineCreateWithoutMedicineInput, TreatmentMedicineUncheckedCreateWithoutMedicineInput> | TreatmentMedicineCreateWithoutMedicineInput[] | TreatmentMedicineUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: TreatmentMedicineCreateOrConnectWithoutMedicineInput | TreatmentMedicineCreateOrConnectWithoutMedicineInput[]
    createMany?: TreatmentMedicineCreateManyMedicineInputEnvelope
    connect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
  }

  export type TerapeuticCategoryCreateNestedOneWithoutMedicinesInput = {
    create?: XOR<TerapeuticCategoryCreateWithoutMedicinesInput, TerapeuticCategoryUncheckedCreateWithoutMedicinesInput>
    connectOrCreate?: TerapeuticCategoryCreateOrConnectWithoutMedicinesInput
    connect?: TerapeuticCategoryWhereUniqueInput
  }

  export type PharmaceuticalFormCreateNestedOneWithoutMedicinesInput = {
    create?: XOR<PharmaceuticalFormCreateWithoutMedicinesInput, PharmaceuticalFormUncheckedCreateWithoutMedicinesInput>
    connectOrCreate?: PharmaceuticalFormCreateOrConnectWithoutMedicinesInput
    connect?: PharmaceuticalFormWhereUniqueInput
  }

  export type TreatmentMedicineUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<TreatmentMedicineCreateWithoutMedicineInput, TreatmentMedicineUncheckedCreateWithoutMedicineInput> | TreatmentMedicineCreateWithoutMedicineInput[] | TreatmentMedicineUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: TreatmentMedicineCreateOrConnectWithoutMedicineInput | TreatmentMedicineCreateOrConnectWithoutMedicineInput[]
    createMany?: TreatmentMedicineCreateManyMedicineInputEnvelope
    connect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TreatmentMedicineUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<TreatmentMedicineCreateWithoutMedicineInput, TreatmentMedicineUncheckedCreateWithoutMedicineInput> | TreatmentMedicineCreateWithoutMedicineInput[] | TreatmentMedicineUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: TreatmentMedicineCreateOrConnectWithoutMedicineInput | TreatmentMedicineCreateOrConnectWithoutMedicineInput[]
    upsert?: TreatmentMedicineUpsertWithWhereUniqueWithoutMedicineInput | TreatmentMedicineUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: TreatmentMedicineCreateManyMedicineInputEnvelope
    set?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    disconnect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    delete?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    connect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    update?: TreatmentMedicineUpdateWithWhereUniqueWithoutMedicineInput | TreatmentMedicineUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: TreatmentMedicineUpdateManyWithWhereWithoutMedicineInput | TreatmentMedicineUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: TreatmentMedicineScalarWhereInput | TreatmentMedicineScalarWhereInput[]
  }

  export type TerapeuticCategoryUpdateOneRequiredWithoutMedicinesNestedInput = {
    create?: XOR<TerapeuticCategoryCreateWithoutMedicinesInput, TerapeuticCategoryUncheckedCreateWithoutMedicinesInput>
    connectOrCreate?: TerapeuticCategoryCreateOrConnectWithoutMedicinesInput
    upsert?: TerapeuticCategoryUpsertWithoutMedicinesInput
    connect?: TerapeuticCategoryWhereUniqueInput
    update?: XOR<XOR<TerapeuticCategoryUpdateToOneWithWhereWithoutMedicinesInput, TerapeuticCategoryUpdateWithoutMedicinesInput>, TerapeuticCategoryUncheckedUpdateWithoutMedicinesInput>
  }

  export type PharmaceuticalFormUpdateOneRequiredWithoutMedicinesNestedInput = {
    create?: XOR<PharmaceuticalFormCreateWithoutMedicinesInput, PharmaceuticalFormUncheckedCreateWithoutMedicinesInput>
    connectOrCreate?: PharmaceuticalFormCreateOrConnectWithoutMedicinesInput
    upsert?: PharmaceuticalFormUpsertWithoutMedicinesInput
    connect?: PharmaceuticalFormWhereUniqueInput
    update?: XOR<XOR<PharmaceuticalFormUpdateToOneWithWhereWithoutMedicinesInput, PharmaceuticalFormUpdateWithoutMedicinesInput>, PharmaceuticalFormUncheckedUpdateWithoutMedicinesInput>
  }

  export type TreatmentMedicineUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<TreatmentMedicineCreateWithoutMedicineInput, TreatmentMedicineUncheckedCreateWithoutMedicineInput> | TreatmentMedicineCreateWithoutMedicineInput[] | TreatmentMedicineUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: TreatmentMedicineCreateOrConnectWithoutMedicineInput | TreatmentMedicineCreateOrConnectWithoutMedicineInput[]
    upsert?: TreatmentMedicineUpsertWithWhereUniqueWithoutMedicineInput | TreatmentMedicineUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: TreatmentMedicineCreateManyMedicineInputEnvelope
    set?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    disconnect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    delete?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    connect?: TreatmentMedicineWhereUniqueInput | TreatmentMedicineWhereUniqueInput[]
    update?: TreatmentMedicineUpdateWithWhereUniqueWithoutMedicineInput | TreatmentMedicineUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: TreatmentMedicineUpdateManyWithWhereWithoutMedicineInput | TreatmentMedicineUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: TreatmentMedicineScalarWhereInput | TreatmentMedicineScalarWhereInput[]
  }

  export type MedicineCreateNestedManyWithoutTerapeuticCategoryInput = {
    create?: XOR<MedicineCreateWithoutTerapeuticCategoryInput, MedicineUncheckedCreateWithoutTerapeuticCategoryInput> | MedicineCreateWithoutTerapeuticCategoryInput[] | MedicineUncheckedCreateWithoutTerapeuticCategoryInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutTerapeuticCategoryInput | MedicineCreateOrConnectWithoutTerapeuticCategoryInput[]
    createMany?: MedicineCreateManyTerapeuticCategoryInputEnvelope
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
  }

  export type MedicineUncheckedCreateNestedManyWithoutTerapeuticCategoryInput = {
    create?: XOR<MedicineCreateWithoutTerapeuticCategoryInput, MedicineUncheckedCreateWithoutTerapeuticCategoryInput> | MedicineCreateWithoutTerapeuticCategoryInput[] | MedicineUncheckedCreateWithoutTerapeuticCategoryInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutTerapeuticCategoryInput | MedicineCreateOrConnectWithoutTerapeuticCategoryInput[]
    createMany?: MedicineCreateManyTerapeuticCategoryInputEnvelope
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
  }

  export type MedicineUpdateManyWithoutTerapeuticCategoryNestedInput = {
    create?: XOR<MedicineCreateWithoutTerapeuticCategoryInput, MedicineUncheckedCreateWithoutTerapeuticCategoryInput> | MedicineCreateWithoutTerapeuticCategoryInput[] | MedicineUncheckedCreateWithoutTerapeuticCategoryInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutTerapeuticCategoryInput | MedicineCreateOrConnectWithoutTerapeuticCategoryInput[]
    upsert?: MedicineUpsertWithWhereUniqueWithoutTerapeuticCategoryInput | MedicineUpsertWithWhereUniqueWithoutTerapeuticCategoryInput[]
    createMany?: MedicineCreateManyTerapeuticCategoryInputEnvelope
    set?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    disconnect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    delete?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    update?: MedicineUpdateWithWhereUniqueWithoutTerapeuticCategoryInput | MedicineUpdateWithWhereUniqueWithoutTerapeuticCategoryInput[]
    updateMany?: MedicineUpdateManyWithWhereWithoutTerapeuticCategoryInput | MedicineUpdateManyWithWhereWithoutTerapeuticCategoryInput[]
    deleteMany?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
  }

  export type MedicineUncheckedUpdateManyWithoutTerapeuticCategoryNestedInput = {
    create?: XOR<MedicineCreateWithoutTerapeuticCategoryInput, MedicineUncheckedCreateWithoutTerapeuticCategoryInput> | MedicineCreateWithoutTerapeuticCategoryInput[] | MedicineUncheckedCreateWithoutTerapeuticCategoryInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutTerapeuticCategoryInput | MedicineCreateOrConnectWithoutTerapeuticCategoryInput[]
    upsert?: MedicineUpsertWithWhereUniqueWithoutTerapeuticCategoryInput | MedicineUpsertWithWhereUniqueWithoutTerapeuticCategoryInput[]
    createMany?: MedicineCreateManyTerapeuticCategoryInputEnvelope
    set?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    disconnect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    delete?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    update?: MedicineUpdateWithWhereUniqueWithoutTerapeuticCategoryInput | MedicineUpdateWithWhereUniqueWithoutTerapeuticCategoryInput[]
    updateMany?: MedicineUpdateManyWithWhereWithoutTerapeuticCategoryInput | MedicineUpdateManyWithWhereWithoutTerapeuticCategoryInput[]
    deleteMany?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
  }

  export type MedicineCreateNestedManyWithoutPharmaceuticalFormInput = {
    create?: XOR<MedicineCreateWithoutPharmaceuticalFormInput, MedicineUncheckedCreateWithoutPharmaceuticalFormInput> | MedicineCreateWithoutPharmaceuticalFormInput[] | MedicineUncheckedCreateWithoutPharmaceuticalFormInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutPharmaceuticalFormInput | MedicineCreateOrConnectWithoutPharmaceuticalFormInput[]
    createMany?: MedicineCreateManyPharmaceuticalFormInputEnvelope
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
  }

  export type MedicineUncheckedCreateNestedManyWithoutPharmaceuticalFormInput = {
    create?: XOR<MedicineCreateWithoutPharmaceuticalFormInput, MedicineUncheckedCreateWithoutPharmaceuticalFormInput> | MedicineCreateWithoutPharmaceuticalFormInput[] | MedicineUncheckedCreateWithoutPharmaceuticalFormInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutPharmaceuticalFormInput | MedicineCreateOrConnectWithoutPharmaceuticalFormInput[]
    createMany?: MedicineCreateManyPharmaceuticalFormInputEnvelope
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
  }

  export type MedicineUpdateManyWithoutPharmaceuticalFormNestedInput = {
    create?: XOR<MedicineCreateWithoutPharmaceuticalFormInput, MedicineUncheckedCreateWithoutPharmaceuticalFormInput> | MedicineCreateWithoutPharmaceuticalFormInput[] | MedicineUncheckedCreateWithoutPharmaceuticalFormInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutPharmaceuticalFormInput | MedicineCreateOrConnectWithoutPharmaceuticalFormInput[]
    upsert?: MedicineUpsertWithWhereUniqueWithoutPharmaceuticalFormInput | MedicineUpsertWithWhereUniqueWithoutPharmaceuticalFormInput[]
    createMany?: MedicineCreateManyPharmaceuticalFormInputEnvelope
    set?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    disconnect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    delete?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    update?: MedicineUpdateWithWhereUniqueWithoutPharmaceuticalFormInput | MedicineUpdateWithWhereUniqueWithoutPharmaceuticalFormInput[]
    updateMany?: MedicineUpdateManyWithWhereWithoutPharmaceuticalFormInput | MedicineUpdateManyWithWhereWithoutPharmaceuticalFormInput[]
    deleteMany?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
  }

  export type MedicineUncheckedUpdateManyWithoutPharmaceuticalFormNestedInput = {
    create?: XOR<MedicineCreateWithoutPharmaceuticalFormInput, MedicineUncheckedCreateWithoutPharmaceuticalFormInput> | MedicineCreateWithoutPharmaceuticalFormInput[] | MedicineUncheckedCreateWithoutPharmaceuticalFormInput[]
    connectOrCreate?: MedicineCreateOrConnectWithoutPharmaceuticalFormInput | MedicineCreateOrConnectWithoutPharmaceuticalFormInput[]
    upsert?: MedicineUpsertWithWhereUniqueWithoutPharmaceuticalFormInput | MedicineUpsertWithWhereUniqueWithoutPharmaceuticalFormInput[]
    createMany?: MedicineCreateManyPharmaceuticalFormInputEnvelope
    set?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    disconnect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    delete?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    connect?: MedicineWhereUniqueInput | MedicineWhereUniqueInput[]
    update?: MedicineUpdateWithWhereUniqueWithoutPharmaceuticalFormInput | MedicineUpdateWithWhereUniqueWithoutPharmaceuticalFormInput[]
    updateMany?: MedicineUpdateManyWithWhereWithoutPharmaceuticalFormInput | MedicineUpdateManyWithWhereWithoutPharmaceuticalFormInput[]
    deleteMany?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumBloodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodTypeFilter<$PrismaModel> | $Enums.BloodType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodTypeWithAggregatesFilter<$PrismaModel> | $Enums.BloodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodTypeFilter<$PrismaModel>
    _max?: NestedEnumBloodTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoomTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeFilter<$PrismaModel> | $Enums.RoomType
  }

  export type NestedEnumRoomStateFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomState | EnumRoomStateFieldRefInput<$PrismaModel>
    in?: $Enums.RoomState[] | ListEnumRoomStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomState[] | ListEnumRoomStateFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStateFilter<$PrismaModel> | $Enums.RoomState
  }

  export type NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomType | EnumRoomTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomType[] | ListEnumRoomTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoomType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomTypeFilter<$PrismaModel>
    _max?: NestedEnumRoomTypeFilter<$PrismaModel>
  }

  export type NestedEnumRoomStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomState | EnumRoomStateFieldRefInput<$PrismaModel>
    in?: $Enums.RoomState[] | ListEnumRoomStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomState[] | ListEnumRoomStateFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStateWithAggregatesFilter<$PrismaModel> | $Enums.RoomState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStateFilter<$PrismaModel>
    _max?: NestedEnumRoomStateFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStateFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentState | EnumAppointmentStateFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentState[] | ListEnumAppointmentStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentState[] | ListEnumAppointmentStateFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStateFilter<$PrismaModel> | $Enums.AppointmentState
  }

  export type NestedEnumAppointmentStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentState | EnumAppointmentStateFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentState[] | ListEnumAppointmentStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentState[] | ListEnumAppointmentStateFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStateWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStateFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStateFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumTimeUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeUnit | EnumTimeUnitFieldRefInput<$PrismaModel>
    in?: $Enums.TimeUnit[] | ListEnumTimeUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeUnit[] | ListEnumTimeUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeUnitFilter<$PrismaModel> | $Enums.TimeUnit
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTimeUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeUnit | EnumTimeUnitFieldRefInput<$PrismaModel>
    in?: $Enums.TimeUnit[] | ListEnumTimeUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeUnit[] | ListEnumTimeUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeUnitWithAggregatesFilter<$PrismaModel> | $Enums.TimeUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeUnitFilter<$PrismaModel>
    _max?: NestedEnumTimeUnitFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PatientAllergyCreateWithoutPatientInput = {
    allergy: AllergyCreateNestedOneWithoutPatientAllergiesInput
  }

  export type PatientAllergyUncheckedCreateWithoutPatientInput = {
    id?: number
    allergyId: number
  }

  export type PatientAllergyCreateOrConnectWithoutPatientInput = {
    where: PatientAllergyWhereUniqueInput
    create: XOR<PatientAllergyCreateWithoutPatientInput, PatientAllergyUncheckedCreateWithoutPatientInput>
  }

  export type PatientAllergyCreateManyPatientInputEnvelope = {
    data: PatientAllergyCreateManyPatientInput | PatientAllergyCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type HospitalizationCreateWithoutPatientInput = {
    entryDate: Date | string
    dischargeDate?: Date | string | null
    reason: string
    room: RoomCreateNestedOneWithoutHospitalizationsInput
  }

  export type HospitalizationUncheckedCreateWithoutPatientInput = {
    id?: number
    entryDate: Date | string
    dischargeDate?: Date | string | null
    reason: string
    roomNumber: number
  }

  export type HospitalizationCreateOrConnectWithoutPatientInput = {
    where: HospitalizationWhereUniqueInput
    create: XOR<HospitalizationCreateWithoutPatientInput, HospitalizationUncheckedCreateWithoutPatientInput>
  }

  export type HospitalizationCreateManyPatientInputEnvelope = {
    data: HospitalizationCreateManyPatientInput | HospitalizationCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutPatientInput = {
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    consult?: ConsultCreateNestedOneWithoutAppointmentInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: number
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    doctorId: number
    consult?: ConsultUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PatientAllergyUpsertWithWhereUniqueWithoutPatientInput = {
    where: PatientAllergyWhereUniqueInput
    update: XOR<PatientAllergyUpdateWithoutPatientInput, PatientAllergyUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientAllergyCreateWithoutPatientInput, PatientAllergyUncheckedCreateWithoutPatientInput>
  }

  export type PatientAllergyUpdateWithWhereUniqueWithoutPatientInput = {
    where: PatientAllergyWhereUniqueInput
    data: XOR<PatientAllergyUpdateWithoutPatientInput, PatientAllergyUncheckedUpdateWithoutPatientInput>
  }

  export type PatientAllergyUpdateManyWithWhereWithoutPatientInput = {
    where: PatientAllergyScalarWhereInput
    data: XOR<PatientAllergyUpdateManyMutationInput, PatientAllergyUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientAllergyScalarWhereInput = {
    AND?: PatientAllergyScalarWhereInput | PatientAllergyScalarWhereInput[]
    OR?: PatientAllergyScalarWhereInput[]
    NOT?: PatientAllergyScalarWhereInput | PatientAllergyScalarWhereInput[]
    id?: IntFilter<"PatientAllergy"> | number
    patientId?: IntFilter<"PatientAllergy"> | number
    allergyId?: IntFilter<"PatientAllergy"> | number
  }

  export type HospitalizationUpsertWithWhereUniqueWithoutPatientInput = {
    where: HospitalizationWhereUniqueInput
    update: XOR<HospitalizationUpdateWithoutPatientInput, HospitalizationUncheckedUpdateWithoutPatientInput>
    create: XOR<HospitalizationCreateWithoutPatientInput, HospitalizationUncheckedCreateWithoutPatientInput>
  }

  export type HospitalizationUpdateWithWhereUniqueWithoutPatientInput = {
    where: HospitalizationWhereUniqueInput
    data: XOR<HospitalizationUpdateWithoutPatientInput, HospitalizationUncheckedUpdateWithoutPatientInput>
  }

  export type HospitalizationUpdateManyWithWhereWithoutPatientInput = {
    where: HospitalizationScalarWhereInput
    data: XOR<HospitalizationUpdateManyMutationInput, HospitalizationUncheckedUpdateManyWithoutPatientInput>
  }

  export type HospitalizationScalarWhereInput = {
    AND?: HospitalizationScalarWhereInput | HospitalizationScalarWhereInput[]
    OR?: HospitalizationScalarWhereInput[]
    NOT?: HospitalizationScalarWhereInput | HospitalizationScalarWhereInput[]
    id?: IntFilter<"Hospitalization"> | number
    entryDate?: DateTimeFilter<"Hospitalization"> | Date | string
    dischargeDate?: DateTimeNullableFilter<"Hospitalization"> | Date | string | null
    reason?: StringFilter<"Hospitalization"> | string
    patientId?: IntFilter<"Hospitalization"> | number
    roomNumber?: IntFilter<"Hospitalization"> | number
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    reason?: StringFilter<"Appointment"> | string
    state?: EnumAppointmentStateFilter<"Appointment"> | $Enums.AppointmentState
    doctorId?: IntFilter<"Appointment"> | number
    patientId?: IntFilter<"Appointment"> | number
  }

  export type PatientCreateWithoutAllergyInput = {
    insurance_num: number
    name: string
    paternalSurname: string
    maternalSurname: string
    dateOfBirth: Date | string
    address: string
    phone: string
    email: string
    bloodType?: $Enums.BloodType
    hospitalizations?: HospitalizationCreateNestedManyWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAllergyInput = {
    id?: number
    insurance_num: number
    name: string
    paternalSurname: string
    maternalSurname: string
    dateOfBirth: Date | string
    address: string
    phone: string
    email: string
    bloodType?: $Enums.BloodType
    hospitalizations?: HospitalizationUncheckedCreateNestedManyWithoutPatientInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAllergyInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAllergyInput, PatientUncheckedCreateWithoutAllergyInput>
  }

  export type AllergyCreateWithoutPatientAllergiesInput = {
    name: string
  }

  export type AllergyUncheckedCreateWithoutPatientAllergiesInput = {
    id?: number
    name: string
  }

  export type AllergyCreateOrConnectWithoutPatientAllergiesInput = {
    where: AllergyWhereUniqueInput
    create: XOR<AllergyCreateWithoutPatientAllergiesInput, AllergyUncheckedCreateWithoutPatientAllergiesInput>
  }

  export type PatientUpsertWithoutAllergyInput = {
    update: XOR<PatientUpdateWithoutAllergyInput, PatientUncheckedUpdateWithoutAllergyInput>
    create: XOR<PatientCreateWithoutAllergyInput, PatientUncheckedCreateWithoutAllergyInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAllergyInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAllergyInput, PatientUncheckedUpdateWithoutAllergyInput>
  }

  export type PatientUpdateWithoutAllergyInput = {
    insurance_num?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    hospitalizations?: HospitalizationUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAllergyInput = {
    id?: IntFieldUpdateOperationsInput | number
    insurance_num?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    hospitalizations?: HospitalizationUncheckedUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type AllergyUpsertWithoutPatientAllergiesInput = {
    update: XOR<AllergyUpdateWithoutPatientAllergiesInput, AllergyUncheckedUpdateWithoutPatientAllergiesInput>
    create: XOR<AllergyCreateWithoutPatientAllergiesInput, AllergyUncheckedCreateWithoutPatientAllergiesInput>
    where?: AllergyWhereInput
  }

  export type AllergyUpdateToOneWithWhereWithoutPatientAllergiesInput = {
    where?: AllergyWhereInput
    data: XOR<AllergyUpdateWithoutPatientAllergiesInput, AllergyUncheckedUpdateWithoutPatientAllergiesInput>
  }

  export type AllergyUpdateWithoutPatientAllergiesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AllergyUncheckedUpdateWithoutPatientAllergiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PatientAllergyCreateWithoutAllergyInput = {
    patient: PatientCreateNestedOneWithoutAllergyInput
  }

  export type PatientAllergyUncheckedCreateWithoutAllergyInput = {
    id?: number
    patientId: number
  }

  export type PatientAllergyCreateOrConnectWithoutAllergyInput = {
    where: PatientAllergyWhereUniqueInput
    create: XOR<PatientAllergyCreateWithoutAllergyInput, PatientAllergyUncheckedCreateWithoutAllergyInput>
  }

  export type PatientAllergyCreateManyAllergyInputEnvelope = {
    data: PatientAllergyCreateManyAllergyInput | PatientAllergyCreateManyAllergyInput[]
    skipDuplicates?: boolean
  }

  export type PatientAllergyUpsertWithWhereUniqueWithoutAllergyInput = {
    where: PatientAllergyWhereUniqueInput
    update: XOR<PatientAllergyUpdateWithoutAllergyInput, PatientAllergyUncheckedUpdateWithoutAllergyInput>
    create: XOR<PatientAllergyCreateWithoutAllergyInput, PatientAllergyUncheckedCreateWithoutAllergyInput>
  }

  export type PatientAllergyUpdateWithWhereUniqueWithoutAllergyInput = {
    where: PatientAllergyWhereUniqueInput
    data: XOR<PatientAllergyUpdateWithoutAllergyInput, PatientAllergyUncheckedUpdateWithoutAllergyInput>
  }

  export type PatientAllergyUpdateManyWithWhereWithoutAllergyInput = {
    where: PatientAllergyScalarWhereInput
    data: XOR<PatientAllergyUpdateManyMutationInput, PatientAllergyUncheckedUpdateManyWithoutAllergyInput>
  }

  export type PatientCreateWithoutHospitalizationsInput = {
    insurance_num: number
    name: string
    paternalSurname: string
    maternalSurname: string
    dateOfBirth: Date | string
    address: string
    phone: string
    email: string
    bloodType?: $Enums.BloodType
    allergy?: PatientAllergyCreateNestedManyWithoutPatientInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutHospitalizationsInput = {
    id?: number
    insurance_num: number
    name: string
    paternalSurname: string
    maternalSurname: string
    dateOfBirth: Date | string
    address: string
    phone: string
    email: string
    bloodType?: $Enums.BloodType
    allergy?: PatientAllergyUncheckedCreateNestedManyWithoutPatientInput
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutHospitalizationsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutHospitalizationsInput, PatientUncheckedCreateWithoutHospitalizationsInput>
  }

  export type RoomCreateWithoutHospitalizationsInput = {
    type?: $Enums.RoomType
    floor: string
    state: $Enums.RoomState
  }

  export type RoomUncheckedCreateWithoutHospitalizationsInput = {
    number?: number
    type?: $Enums.RoomType
    floor: string
    state: $Enums.RoomState
  }

  export type RoomCreateOrConnectWithoutHospitalizationsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHospitalizationsInput, RoomUncheckedCreateWithoutHospitalizationsInput>
  }

  export type PatientUpsertWithoutHospitalizationsInput = {
    update: XOR<PatientUpdateWithoutHospitalizationsInput, PatientUncheckedUpdateWithoutHospitalizationsInput>
    create: XOR<PatientCreateWithoutHospitalizationsInput, PatientUncheckedCreateWithoutHospitalizationsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutHospitalizationsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutHospitalizationsInput, PatientUncheckedUpdateWithoutHospitalizationsInput>
  }

  export type PatientUpdateWithoutHospitalizationsInput = {
    insurance_num?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    allergy?: PatientAllergyUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutHospitalizationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    insurance_num?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    allergy?: PatientAllergyUncheckedUpdateManyWithoutPatientNestedInput
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type RoomUpsertWithoutHospitalizationsInput = {
    update: XOR<RoomUpdateWithoutHospitalizationsInput, RoomUncheckedUpdateWithoutHospitalizationsInput>
    create: XOR<RoomCreateWithoutHospitalizationsInput, RoomUncheckedCreateWithoutHospitalizationsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutHospitalizationsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutHospitalizationsInput, RoomUncheckedUpdateWithoutHospitalizationsInput>
  }

  export type RoomUpdateWithoutHospitalizationsInput = {
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    floor?: StringFieldUpdateOperationsInput | string
    state?: EnumRoomStateFieldUpdateOperationsInput | $Enums.RoomState
  }

  export type RoomUncheckedUpdateWithoutHospitalizationsInput = {
    number?: IntFieldUpdateOperationsInput | number
    type?: EnumRoomTypeFieldUpdateOperationsInput | $Enums.RoomType
    floor?: StringFieldUpdateOperationsInput | string
    state?: EnumRoomStateFieldUpdateOperationsInput | $Enums.RoomState
  }

  export type HospitalizationCreateWithoutRoomInput = {
    entryDate: Date | string
    dischargeDate?: Date | string | null
    reason: string
    patient: PatientCreateNestedOneWithoutHospitalizationsInput
  }

  export type HospitalizationUncheckedCreateWithoutRoomInput = {
    id?: number
    entryDate: Date | string
    dischargeDate?: Date | string | null
    reason: string
    patientId: number
  }

  export type HospitalizationCreateOrConnectWithoutRoomInput = {
    where: HospitalizationWhereUniqueInput
    create: XOR<HospitalizationCreateWithoutRoomInput, HospitalizationUncheckedCreateWithoutRoomInput>
  }

  export type HospitalizationCreateManyRoomInputEnvelope = {
    data: HospitalizationCreateManyRoomInput | HospitalizationCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type HospitalizationUpsertWithWhereUniqueWithoutRoomInput = {
    where: HospitalizationWhereUniqueInput
    update: XOR<HospitalizationUpdateWithoutRoomInput, HospitalizationUncheckedUpdateWithoutRoomInput>
    create: XOR<HospitalizationCreateWithoutRoomInput, HospitalizationUncheckedCreateWithoutRoomInput>
  }

  export type HospitalizationUpdateWithWhereUniqueWithoutRoomInput = {
    where: HospitalizationWhereUniqueInput
    data: XOR<HospitalizationUpdateWithoutRoomInput, HospitalizationUncheckedUpdateWithoutRoomInput>
  }

  export type HospitalizationUpdateManyWithWhereWithoutRoomInput = {
    where: HospitalizationScalarWhereInput
    data: XOR<HospitalizationUpdateManyMutationInput, HospitalizationUncheckedUpdateManyWithoutRoomInput>
  }

  export type DoctorSpecialityCreateWithoutDoctorInput = {
    speciality: SpecialityCreateNestedOneWithoutDoctorSpecialitiesInput
  }

  export type DoctorSpecialityUncheckedCreateWithoutDoctorInput = {
    id?: number
    specialityId: number
  }

  export type DoctorSpecialityCreateOrConnectWithoutDoctorInput = {
    where: DoctorSpecialityWhereUniqueInput
    create: XOR<DoctorSpecialityCreateWithoutDoctorInput, DoctorSpecialityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSpecialityCreateManyDoctorInputEnvelope = {
    data: DoctorSpecialityCreateManyDoctorInput | DoctorSpecialityCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutDoctorInput = {
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    consult?: ConsultCreateNestedOneWithoutAppointmentInput
    patient: PatientCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: number
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    patientId: number
    consult?: ConsultUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSpecialityUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSpecialityWhereUniqueInput
    update: XOR<DoctorSpecialityUpdateWithoutDoctorInput, DoctorSpecialityUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorSpecialityCreateWithoutDoctorInput, DoctorSpecialityUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSpecialityUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSpecialityWhereUniqueInput
    data: XOR<DoctorSpecialityUpdateWithoutDoctorInput, DoctorSpecialityUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorSpecialityUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorSpecialityScalarWhereInput
    data: XOR<DoctorSpecialityUpdateManyMutationInput, DoctorSpecialityUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorSpecialityScalarWhereInput = {
    AND?: DoctorSpecialityScalarWhereInput | DoctorSpecialityScalarWhereInput[]
    OR?: DoctorSpecialityScalarWhereInput[]
    NOT?: DoctorSpecialityScalarWhereInput | DoctorSpecialityScalarWhereInput[]
    id?: IntFilter<"DoctorSpeciality"> | number
    doctorId?: IntFilter<"DoctorSpeciality"> | number
    specialityId?: IntFilter<"DoctorSpeciality"> | number
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorCreateWithoutDoctorSpecialityInput = {
    professionalID: string
    name: string
    paternalSurname: string
    maternalSurname: string
    yearsOfExp: number
    phone: string
    email: string
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutDoctorSpecialityInput = {
    id?: number
    professionalID: string
    name: string
    paternalSurname: string
    maternalSurname: string
    yearsOfExp: number
    phone: string
    email: string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutDoctorSpecialityInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutDoctorSpecialityInput, DoctorUncheckedCreateWithoutDoctorSpecialityInput>
  }

  export type SpecialityCreateWithoutDoctorSpecialitiesInput = {
    name: string
    description: string
  }

  export type SpecialityUncheckedCreateWithoutDoctorSpecialitiesInput = {
    code?: number
    name: string
    description: string
  }

  export type SpecialityCreateOrConnectWithoutDoctorSpecialitiesInput = {
    where: SpecialityWhereUniqueInput
    create: XOR<SpecialityCreateWithoutDoctorSpecialitiesInput, SpecialityUncheckedCreateWithoutDoctorSpecialitiesInput>
  }

  export type DoctorUpsertWithoutDoctorSpecialityInput = {
    update: XOR<DoctorUpdateWithoutDoctorSpecialityInput, DoctorUncheckedUpdateWithoutDoctorSpecialityInput>
    create: XOR<DoctorCreateWithoutDoctorSpecialityInput, DoctorUncheckedCreateWithoutDoctorSpecialityInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutDoctorSpecialityInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutDoctorSpecialityInput, DoctorUncheckedUpdateWithoutDoctorSpecialityInput>
  }

  export type DoctorUpdateWithoutDoctorSpecialityInput = {
    professionalID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    yearsOfExp?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutDoctorSpecialityInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    yearsOfExp?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type SpecialityUpsertWithoutDoctorSpecialitiesInput = {
    update: XOR<SpecialityUpdateWithoutDoctorSpecialitiesInput, SpecialityUncheckedUpdateWithoutDoctorSpecialitiesInput>
    create: XOR<SpecialityCreateWithoutDoctorSpecialitiesInput, SpecialityUncheckedCreateWithoutDoctorSpecialitiesInput>
    where?: SpecialityWhereInput
  }

  export type SpecialityUpdateToOneWithWhereWithoutDoctorSpecialitiesInput = {
    where?: SpecialityWhereInput
    data: XOR<SpecialityUpdateWithoutDoctorSpecialitiesInput, SpecialityUncheckedUpdateWithoutDoctorSpecialitiesInput>
  }

  export type SpecialityUpdateWithoutDoctorSpecialitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialityUncheckedUpdateWithoutDoctorSpecialitiesInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSpecialityCreateWithoutSpecialityInput = {
    doctor: DoctorCreateNestedOneWithoutDoctorSpecialityInput
  }

  export type DoctorSpecialityUncheckedCreateWithoutSpecialityInput = {
    id?: number
    doctorId: number
  }

  export type DoctorSpecialityCreateOrConnectWithoutSpecialityInput = {
    where: DoctorSpecialityWhereUniqueInput
    create: XOR<DoctorSpecialityCreateWithoutSpecialityInput, DoctorSpecialityUncheckedCreateWithoutSpecialityInput>
  }

  export type DoctorSpecialityCreateManySpecialityInputEnvelope = {
    data: DoctorSpecialityCreateManySpecialityInput | DoctorSpecialityCreateManySpecialityInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSpecialityUpsertWithWhereUniqueWithoutSpecialityInput = {
    where: DoctorSpecialityWhereUniqueInput
    update: XOR<DoctorSpecialityUpdateWithoutSpecialityInput, DoctorSpecialityUncheckedUpdateWithoutSpecialityInput>
    create: XOR<DoctorSpecialityCreateWithoutSpecialityInput, DoctorSpecialityUncheckedCreateWithoutSpecialityInput>
  }

  export type DoctorSpecialityUpdateWithWhereUniqueWithoutSpecialityInput = {
    where: DoctorSpecialityWhereUniqueInput
    data: XOR<DoctorSpecialityUpdateWithoutSpecialityInput, DoctorSpecialityUncheckedUpdateWithoutSpecialityInput>
  }

  export type DoctorSpecialityUpdateManyWithWhereWithoutSpecialityInput = {
    where: DoctorSpecialityScalarWhereInput
    data: XOR<DoctorSpecialityUpdateManyMutationInput, DoctorSpecialityUncheckedUpdateManyWithoutSpecialityInput>
  }

  export type ConsultCreateWithoutAppointmentInput = {
    diagnosis: string
    observations: string
    treatment: TreatmentCreateNestedOneWithoutConsultInput
  }

  export type ConsultUncheckedCreateWithoutAppointmentInput = {
    id?: number
    diagnosis: string
    observations: string
    treatmentId: number
  }

  export type ConsultCreateOrConnectWithoutAppointmentInput = {
    where: ConsultWhereUniqueInput
    create: XOR<ConsultCreateWithoutAppointmentInput, ConsultUncheckedCreateWithoutAppointmentInput>
  }

  export type DoctorCreateWithoutAppointmentsInput = {
    professionalID: string
    name: string
    paternalSurname: string
    maternalSurname: string
    yearsOfExp: number
    phone: string
    email: string
    doctorSpeciality?: DoctorSpecialityCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    professionalID: string
    name: string
    paternalSurname: string
    maternalSurname: string
    yearsOfExp: number
    phone: string
    email: string
    doctorSpeciality?: DoctorSpecialityUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
  }

  export type PatientCreateWithoutAppointmentsInput = {
    insurance_num: number
    name: string
    paternalSurname: string
    maternalSurname: string
    dateOfBirth: Date | string
    address: string
    phone: string
    email: string
    bloodType?: $Enums.BloodType
    allergy?: PatientAllergyCreateNestedManyWithoutPatientInput
    hospitalizations?: HospitalizationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    insurance_num: number
    name: string
    paternalSurname: string
    maternalSurname: string
    dateOfBirth: Date | string
    address: string
    phone: string
    email: string
    bloodType?: $Enums.BloodType
    allergy?: PatientAllergyUncheckedCreateNestedManyWithoutPatientInput
    hospitalizations?: HospitalizationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
  }

  export type ConsultUpsertWithoutAppointmentInput = {
    update: XOR<ConsultUpdateWithoutAppointmentInput, ConsultUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ConsultCreateWithoutAppointmentInput, ConsultUncheckedCreateWithoutAppointmentInput>
    where?: ConsultWhereInput
  }

  export type ConsultUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: ConsultWhereInput
    data: XOR<ConsultUpdateWithoutAppointmentInput, ConsultUncheckedUpdateWithoutAppointmentInput>
  }

  export type ConsultUpdateWithoutAppointmentInput = {
    diagnosis?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    treatment?: TreatmentUpdateOneRequiredWithoutConsultNestedInput
  }

  export type ConsultUncheckedUpdateWithoutAppointmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    treatmentId?: IntFieldUpdateOperationsInput | number
  }

  export type DoctorUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateWithoutAppointmentsInput = {
    professionalID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    yearsOfExp?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    doctorSpeciality?: DoctorSpecialityUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    professionalID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    yearsOfExp?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    doctorSpeciality?: DoctorSpecialityUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientUpsertWithoutAppointmentsInput = {
    update: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateWithoutAppointmentsInput = {
    insurance_num?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    allergy?: PatientAllergyUpdateManyWithoutPatientNestedInput
    hospitalizations?: HospitalizationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    insurance_num?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    paternalSurname?: StringFieldUpdateOperationsInput | string
    maternalSurname?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bloodType?: EnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType
    allergy?: PatientAllergyUncheckedUpdateManyWithoutPatientNestedInput
    hospitalizations?: HospitalizationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type AppointmentCreateWithoutConsultInput = {
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    patient: PatientCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutConsultInput = {
    id?: number
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    doctorId: number
    patientId: number
  }

  export type AppointmentCreateOrConnectWithoutConsultInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutConsultInput, AppointmentUncheckedCreateWithoutConsultInput>
  }

  export type TreatmentCreateWithoutConsultInput = {
    dose: Decimal | DecimalJsLike | number | string
    frequency: number
    frequencyUnit?: $Enums.TimeUnit
    duration: number
    durationUnit?: $Enums.TimeUnit
    observations: string
    treatmentMedicine?: TreatmentMedicineCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentUncheckedCreateWithoutConsultInput = {
    id?: number
    dose: Decimal | DecimalJsLike | number | string
    frequency: number
    frequencyUnit?: $Enums.TimeUnit
    duration: number
    durationUnit?: $Enums.TimeUnit
    observations: string
    treatmentMedicine?: TreatmentMedicineUncheckedCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentCreateOrConnectWithoutConsultInput = {
    where: TreatmentWhereUniqueInput
    create: XOR<TreatmentCreateWithoutConsultInput, TreatmentUncheckedCreateWithoutConsultInput>
  }

  export type AppointmentUpsertWithoutConsultInput = {
    update: XOR<AppointmentUpdateWithoutConsultInput, AppointmentUncheckedUpdateWithoutConsultInput>
    create: XOR<AppointmentCreateWithoutConsultInput, AppointmentUncheckedCreateWithoutConsultInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutConsultInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutConsultInput, AppointmentUncheckedUpdateWithoutConsultInput>
  }

  export type AppointmentUpdateWithoutConsultInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutConsultInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    doctorId?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentUpsertWithoutConsultInput = {
    update: XOR<TreatmentUpdateWithoutConsultInput, TreatmentUncheckedUpdateWithoutConsultInput>
    create: XOR<TreatmentCreateWithoutConsultInput, TreatmentUncheckedCreateWithoutConsultInput>
    where?: TreatmentWhereInput
  }

  export type TreatmentUpdateToOneWithWhereWithoutConsultInput = {
    where?: TreatmentWhereInput
    data: XOR<TreatmentUpdateWithoutConsultInput, TreatmentUncheckedUpdateWithoutConsultInput>
  }

  export type TreatmentUpdateWithoutConsultInput = {
    dose?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: IntFieldUpdateOperationsInput | number
    frequencyUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    observations?: StringFieldUpdateOperationsInput | string
    treatmentMedicine?: TreatmentMedicineUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentUncheckedUpdateWithoutConsultInput = {
    id?: IntFieldUpdateOperationsInput | number
    dose?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: IntFieldUpdateOperationsInput | number
    frequencyUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    observations?: StringFieldUpdateOperationsInput | string
    treatmentMedicine?: TreatmentMedicineUncheckedUpdateManyWithoutTreatmentNestedInput
  }

  export type ConsultCreateWithoutTreatmentInput = {
    diagnosis: string
    observations: string
    appointment: AppointmentCreateNestedOneWithoutConsultInput
  }

  export type ConsultUncheckedCreateWithoutTreatmentInput = {
    id?: number
    diagnosis: string
    observations: string
    appointmentId: number
  }

  export type ConsultCreateOrConnectWithoutTreatmentInput = {
    where: ConsultWhereUniqueInput
    create: XOR<ConsultCreateWithoutTreatmentInput, ConsultUncheckedCreateWithoutTreatmentInput>
  }

  export type TreatmentMedicineCreateWithoutTreatmentInput = {
    medicine: MedicineCreateNestedOneWithoutTreatmentMedicineInput
  }

  export type TreatmentMedicineUncheckedCreateWithoutTreatmentInput = {
    id?: number
    medicineId: number
  }

  export type TreatmentMedicineCreateOrConnectWithoutTreatmentInput = {
    where: TreatmentMedicineWhereUniqueInput
    create: XOR<TreatmentMedicineCreateWithoutTreatmentInput, TreatmentMedicineUncheckedCreateWithoutTreatmentInput>
  }

  export type TreatmentMedicineCreateManyTreatmentInputEnvelope = {
    data: TreatmentMedicineCreateManyTreatmentInput | TreatmentMedicineCreateManyTreatmentInput[]
    skipDuplicates?: boolean
  }

  export type ConsultUpsertWithoutTreatmentInput = {
    update: XOR<ConsultUpdateWithoutTreatmentInput, ConsultUncheckedUpdateWithoutTreatmentInput>
    create: XOR<ConsultCreateWithoutTreatmentInput, ConsultUncheckedCreateWithoutTreatmentInput>
    where?: ConsultWhereInput
  }

  export type ConsultUpdateToOneWithWhereWithoutTreatmentInput = {
    where?: ConsultWhereInput
    data: XOR<ConsultUpdateWithoutTreatmentInput, ConsultUncheckedUpdateWithoutTreatmentInput>
  }

  export type ConsultUpdateWithoutTreatmentInput = {
    diagnosis?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    appointment?: AppointmentUpdateOneRequiredWithoutConsultNestedInput
  }

  export type ConsultUncheckedUpdateWithoutTreatmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnosis?: StringFieldUpdateOperationsInput | string
    observations?: StringFieldUpdateOperationsInput | string
    appointmentId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentMedicineUpsertWithWhereUniqueWithoutTreatmentInput = {
    where: TreatmentMedicineWhereUniqueInput
    update: XOR<TreatmentMedicineUpdateWithoutTreatmentInput, TreatmentMedicineUncheckedUpdateWithoutTreatmentInput>
    create: XOR<TreatmentMedicineCreateWithoutTreatmentInput, TreatmentMedicineUncheckedCreateWithoutTreatmentInput>
  }

  export type TreatmentMedicineUpdateWithWhereUniqueWithoutTreatmentInput = {
    where: TreatmentMedicineWhereUniqueInput
    data: XOR<TreatmentMedicineUpdateWithoutTreatmentInput, TreatmentMedicineUncheckedUpdateWithoutTreatmentInput>
  }

  export type TreatmentMedicineUpdateManyWithWhereWithoutTreatmentInput = {
    where: TreatmentMedicineScalarWhereInput
    data: XOR<TreatmentMedicineUpdateManyMutationInput, TreatmentMedicineUncheckedUpdateManyWithoutTreatmentInput>
  }

  export type TreatmentMedicineScalarWhereInput = {
    AND?: TreatmentMedicineScalarWhereInput | TreatmentMedicineScalarWhereInput[]
    OR?: TreatmentMedicineScalarWhereInput[]
    NOT?: TreatmentMedicineScalarWhereInput | TreatmentMedicineScalarWhereInput[]
    id?: IntFilter<"TreatmentMedicine"> | number
    treatmentId?: IntFilter<"TreatmentMedicine"> | number
    medicineId?: IntFilter<"TreatmentMedicine"> | number
  }

  export type TreatmentCreateWithoutTreatmentMedicineInput = {
    dose: Decimal | DecimalJsLike | number | string
    frequency: number
    frequencyUnit?: $Enums.TimeUnit
    duration: number
    durationUnit?: $Enums.TimeUnit
    observations: string
    consult?: ConsultCreateNestedOneWithoutTreatmentInput
  }

  export type TreatmentUncheckedCreateWithoutTreatmentMedicineInput = {
    id?: number
    dose: Decimal | DecimalJsLike | number | string
    frequency: number
    frequencyUnit?: $Enums.TimeUnit
    duration: number
    durationUnit?: $Enums.TimeUnit
    observations: string
    consult?: ConsultUncheckedCreateNestedOneWithoutTreatmentInput
  }

  export type TreatmentCreateOrConnectWithoutTreatmentMedicineInput = {
    where: TreatmentWhereUniqueInput
    create: XOR<TreatmentCreateWithoutTreatmentMedicineInput, TreatmentUncheckedCreateWithoutTreatmentMedicineInput>
  }

  export type MedicineCreateWithoutTreatmentMedicineInput = {
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    terapeuticCategory: TerapeuticCategoryCreateNestedOneWithoutMedicinesInput
    pharmaceuticalForm: PharmaceuticalFormCreateNestedOneWithoutMedicinesInput
  }

  export type MedicineUncheckedCreateWithoutTreatmentMedicineInput = {
    id?: number
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    teraputicCategoryid: number
    pharmaceuticalFormid: number
  }

  export type MedicineCreateOrConnectWithoutTreatmentMedicineInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutTreatmentMedicineInput, MedicineUncheckedCreateWithoutTreatmentMedicineInput>
  }

  export type TreatmentUpsertWithoutTreatmentMedicineInput = {
    update: XOR<TreatmentUpdateWithoutTreatmentMedicineInput, TreatmentUncheckedUpdateWithoutTreatmentMedicineInput>
    create: XOR<TreatmentCreateWithoutTreatmentMedicineInput, TreatmentUncheckedCreateWithoutTreatmentMedicineInput>
    where?: TreatmentWhereInput
  }

  export type TreatmentUpdateToOneWithWhereWithoutTreatmentMedicineInput = {
    where?: TreatmentWhereInput
    data: XOR<TreatmentUpdateWithoutTreatmentMedicineInput, TreatmentUncheckedUpdateWithoutTreatmentMedicineInput>
  }

  export type TreatmentUpdateWithoutTreatmentMedicineInput = {
    dose?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: IntFieldUpdateOperationsInput | number
    frequencyUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    observations?: StringFieldUpdateOperationsInput | string
    consult?: ConsultUpdateOneWithoutTreatmentNestedInput
  }

  export type TreatmentUncheckedUpdateWithoutTreatmentMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    dose?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: IntFieldUpdateOperationsInput | number
    frequencyUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    duration?: IntFieldUpdateOperationsInput | number
    durationUnit?: EnumTimeUnitFieldUpdateOperationsInput | $Enums.TimeUnit
    observations?: StringFieldUpdateOperationsInput | string
    consult?: ConsultUncheckedUpdateOneWithoutTreatmentNestedInput
  }

  export type MedicineUpsertWithoutTreatmentMedicineInput = {
    update: XOR<MedicineUpdateWithoutTreatmentMedicineInput, MedicineUncheckedUpdateWithoutTreatmentMedicineInput>
    create: XOR<MedicineCreateWithoutTreatmentMedicineInput, MedicineUncheckedCreateWithoutTreatmentMedicineInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutTreatmentMedicineInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutTreatmentMedicineInput, MedicineUncheckedUpdateWithoutTreatmentMedicineInput>
  }

  export type MedicineUpdateWithoutTreatmentMedicineInput = {
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    terapeuticCategory?: TerapeuticCategoryUpdateOneRequiredWithoutMedicinesNestedInput
    pharmaceuticalForm?: PharmaceuticalFormUpdateOneRequiredWithoutMedicinesNestedInput
  }

  export type MedicineUncheckedUpdateWithoutTreatmentMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    teraputicCategoryid?: IntFieldUpdateOperationsInput | number
    pharmaceuticalFormid?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentMedicineCreateWithoutMedicineInput = {
    treatment: TreatmentCreateNestedOneWithoutTreatmentMedicineInput
  }

  export type TreatmentMedicineUncheckedCreateWithoutMedicineInput = {
    id?: number
    treatmentId: number
  }

  export type TreatmentMedicineCreateOrConnectWithoutMedicineInput = {
    where: TreatmentMedicineWhereUniqueInput
    create: XOR<TreatmentMedicineCreateWithoutMedicineInput, TreatmentMedicineUncheckedCreateWithoutMedicineInput>
  }

  export type TreatmentMedicineCreateManyMedicineInputEnvelope = {
    data: TreatmentMedicineCreateManyMedicineInput | TreatmentMedicineCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type TerapeuticCategoryCreateWithoutMedicinesInput = {
    name: string
  }

  export type TerapeuticCategoryUncheckedCreateWithoutMedicinesInput = {
    id?: number
    name: string
  }

  export type TerapeuticCategoryCreateOrConnectWithoutMedicinesInput = {
    where: TerapeuticCategoryWhereUniqueInput
    create: XOR<TerapeuticCategoryCreateWithoutMedicinesInput, TerapeuticCategoryUncheckedCreateWithoutMedicinesInput>
  }

  export type PharmaceuticalFormCreateWithoutMedicinesInput = {
    name: string
  }

  export type PharmaceuticalFormUncheckedCreateWithoutMedicinesInput = {
    id?: number
    name: string
  }

  export type PharmaceuticalFormCreateOrConnectWithoutMedicinesInput = {
    where: PharmaceuticalFormWhereUniqueInput
    create: XOR<PharmaceuticalFormCreateWithoutMedicinesInput, PharmaceuticalFormUncheckedCreateWithoutMedicinesInput>
  }

  export type TreatmentMedicineUpsertWithWhereUniqueWithoutMedicineInput = {
    where: TreatmentMedicineWhereUniqueInput
    update: XOR<TreatmentMedicineUpdateWithoutMedicineInput, TreatmentMedicineUncheckedUpdateWithoutMedicineInput>
    create: XOR<TreatmentMedicineCreateWithoutMedicineInput, TreatmentMedicineUncheckedCreateWithoutMedicineInput>
  }

  export type TreatmentMedicineUpdateWithWhereUniqueWithoutMedicineInput = {
    where: TreatmentMedicineWhereUniqueInput
    data: XOR<TreatmentMedicineUpdateWithoutMedicineInput, TreatmentMedicineUncheckedUpdateWithoutMedicineInput>
  }

  export type TreatmentMedicineUpdateManyWithWhereWithoutMedicineInput = {
    where: TreatmentMedicineScalarWhereInput
    data: XOR<TreatmentMedicineUpdateManyMutationInput, TreatmentMedicineUncheckedUpdateManyWithoutMedicineInput>
  }

  export type TerapeuticCategoryUpsertWithoutMedicinesInput = {
    update: XOR<TerapeuticCategoryUpdateWithoutMedicinesInput, TerapeuticCategoryUncheckedUpdateWithoutMedicinesInput>
    create: XOR<TerapeuticCategoryCreateWithoutMedicinesInput, TerapeuticCategoryUncheckedCreateWithoutMedicinesInput>
    where?: TerapeuticCategoryWhereInput
  }

  export type TerapeuticCategoryUpdateToOneWithWhereWithoutMedicinesInput = {
    where?: TerapeuticCategoryWhereInput
    data: XOR<TerapeuticCategoryUpdateWithoutMedicinesInput, TerapeuticCategoryUncheckedUpdateWithoutMedicinesInput>
  }

  export type TerapeuticCategoryUpdateWithoutMedicinesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TerapeuticCategoryUncheckedUpdateWithoutMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PharmaceuticalFormUpsertWithoutMedicinesInput = {
    update: XOR<PharmaceuticalFormUpdateWithoutMedicinesInput, PharmaceuticalFormUncheckedUpdateWithoutMedicinesInput>
    create: XOR<PharmaceuticalFormCreateWithoutMedicinesInput, PharmaceuticalFormUncheckedCreateWithoutMedicinesInput>
    where?: PharmaceuticalFormWhereInput
  }

  export type PharmaceuticalFormUpdateToOneWithWhereWithoutMedicinesInput = {
    where?: PharmaceuticalFormWhereInput
    data: XOR<PharmaceuticalFormUpdateWithoutMedicinesInput, PharmaceuticalFormUncheckedUpdateWithoutMedicinesInput>
  }

  export type PharmaceuticalFormUpdateWithoutMedicinesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PharmaceuticalFormUncheckedUpdateWithoutMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MedicineCreateWithoutTerapeuticCategoryInput = {
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    treatmentMedicine?: TreatmentMedicineCreateNestedManyWithoutMedicineInput
    pharmaceuticalForm: PharmaceuticalFormCreateNestedOneWithoutMedicinesInput
  }

  export type MedicineUncheckedCreateWithoutTerapeuticCategoryInput = {
    id?: number
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    pharmaceuticalFormid: number
    treatmentMedicine?: TreatmentMedicineUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutTerapeuticCategoryInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutTerapeuticCategoryInput, MedicineUncheckedCreateWithoutTerapeuticCategoryInput>
  }

  export type MedicineCreateManyTerapeuticCategoryInputEnvelope = {
    data: MedicineCreateManyTerapeuticCategoryInput | MedicineCreateManyTerapeuticCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MedicineUpsertWithWhereUniqueWithoutTerapeuticCategoryInput = {
    where: MedicineWhereUniqueInput
    update: XOR<MedicineUpdateWithoutTerapeuticCategoryInput, MedicineUncheckedUpdateWithoutTerapeuticCategoryInput>
    create: XOR<MedicineCreateWithoutTerapeuticCategoryInput, MedicineUncheckedCreateWithoutTerapeuticCategoryInput>
  }

  export type MedicineUpdateWithWhereUniqueWithoutTerapeuticCategoryInput = {
    where: MedicineWhereUniqueInput
    data: XOR<MedicineUpdateWithoutTerapeuticCategoryInput, MedicineUncheckedUpdateWithoutTerapeuticCategoryInput>
  }

  export type MedicineUpdateManyWithWhereWithoutTerapeuticCategoryInput = {
    where: MedicineScalarWhereInput
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyWithoutTerapeuticCategoryInput>
  }

  export type MedicineScalarWhereInput = {
    AND?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
    OR?: MedicineScalarWhereInput[]
    NOT?: MedicineScalarWhereInput | MedicineScalarWhereInput[]
    id?: IntFilter<"Medicine"> | number
    code?: StringFilter<"Medicine"> | string
    tradeName?: StringFilter<"Medicine"> | string
    activeIngredient?: StringFilter<"Medicine"> | string
    laboratory?: StringFilter<"Medicine"> | string
    contraindications?: StringNullableFilter<"Medicine"> | string | null
    concentration?: IntFilter<"Medicine"> | number
    recommendedDosage?: IntFilter<"Medicine"> | number
    teraputicCategoryid?: IntFilter<"Medicine"> | number
    pharmaceuticalFormid?: IntFilter<"Medicine"> | number
  }

  export type MedicineCreateWithoutPharmaceuticalFormInput = {
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    treatmentMedicine?: TreatmentMedicineCreateNestedManyWithoutMedicineInput
    terapeuticCategory: TerapeuticCategoryCreateNestedOneWithoutMedicinesInput
  }

  export type MedicineUncheckedCreateWithoutPharmaceuticalFormInput = {
    id?: number
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    teraputicCategoryid: number
    treatmentMedicine?: TreatmentMedicineUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutPharmaceuticalFormInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutPharmaceuticalFormInput, MedicineUncheckedCreateWithoutPharmaceuticalFormInput>
  }

  export type MedicineCreateManyPharmaceuticalFormInputEnvelope = {
    data: MedicineCreateManyPharmaceuticalFormInput | MedicineCreateManyPharmaceuticalFormInput[]
    skipDuplicates?: boolean
  }

  export type MedicineUpsertWithWhereUniqueWithoutPharmaceuticalFormInput = {
    where: MedicineWhereUniqueInput
    update: XOR<MedicineUpdateWithoutPharmaceuticalFormInput, MedicineUncheckedUpdateWithoutPharmaceuticalFormInput>
    create: XOR<MedicineCreateWithoutPharmaceuticalFormInput, MedicineUncheckedCreateWithoutPharmaceuticalFormInput>
  }

  export type MedicineUpdateWithWhereUniqueWithoutPharmaceuticalFormInput = {
    where: MedicineWhereUniqueInput
    data: XOR<MedicineUpdateWithoutPharmaceuticalFormInput, MedicineUncheckedUpdateWithoutPharmaceuticalFormInput>
  }

  export type MedicineUpdateManyWithWhereWithoutPharmaceuticalFormInput = {
    where: MedicineScalarWhereInput
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyWithoutPharmaceuticalFormInput>
  }

  export type PatientAllergyCreateManyPatientInput = {
    id?: number
    allergyId: number
  }

  export type HospitalizationCreateManyPatientInput = {
    id?: number
    entryDate: Date | string
    dischargeDate?: Date | string | null
    reason: string
    roomNumber: number
  }

  export type AppointmentCreateManyPatientInput = {
    id?: number
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    doctorId: number
  }

  export type PatientAllergyUpdateWithoutPatientInput = {
    allergy?: AllergyUpdateOneRequiredWithoutPatientAllergiesNestedInput
  }

  export type PatientAllergyUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    allergyId?: IntFieldUpdateOperationsInput | number
  }

  export type PatientAllergyUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    allergyId?: IntFieldUpdateOperationsInput | number
  }

  export type HospitalizationUpdateWithoutPatientInput = {
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutHospitalizationsNestedInput
  }

  export type HospitalizationUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
  }

  export type HospitalizationUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUpdateWithoutPatientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    consult?: ConsultUpdateOneWithoutAppointmentNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    doctorId?: IntFieldUpdateOperationsInput | number
    consult?: ConsultUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type PatientAllergyCreateManyAllergyInput = {
    id?: number
    patientId: number
  }

  export type PatientAllergyUpdateWithoutAllergyInput = {
    patient?: PatientUpdateOneRequiredWithoutAllergyNestedInput
  }

  export type PatientAllergyUncheckedUpdateWithoutAllergyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type PatientAllergyUncheckedUpdateManyWithoutAllergyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type HospitalizationCreateManyRoomInput = {
    id?: number
    entryDate: Date | string
    dischargeDate?: Date | string | null
    reason: string
    patientId: number
  }

  export type HospitalizationUpdateWithoutRoomInput = {
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: StringFieldUpdateOperationsInput | string
    patient?: PatientUpdateOneRequiredWithoutHospitalizationsNestedInput
  }

  export type HospitalizationUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type HospitalizationUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dischargeDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reason?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type DoctorSpecialityCreateManyDoctorInput = {
    id?: number
    specialityId: number
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: number
    date: Date | string
    reason: string
    state?: $Enums.AppointmentState
    patientId: number
  }

  export type DoctorSpecialityUpdateWithoutDoctorInput = {
    speciality?: SpecialityUpdateOneRequiredWithoutDoctorSpecialitiesNestedInput
  }

  export type DoctorSpecialityUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialityId?: IntFieldUpdateOperationsInput | number
  }

  export type DoctorSpecialityUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    specialityId?: IntFieldUpdateOperationsInput | number
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    consult?: ConsultUpdateOneWithoutAppointmentNestedInput
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    patientId?: IntFieldUpdateOperationsInput | number
    consult?: ConsultUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    state?: EnumAppointmentStateFieldUpdateOperationsInput | $Enums.AppointmentState
    patientId?: IntFieldUpdateOperationsInput | number
  }

  export type DoctorSpecialityCreateManySpecialityInput = {
    id?: number
    doctorId: number
  }

  export type DoctorSpecialityUpdateWithoutSpecialityInput = {
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSpecialityNestedInput
  }

  export type DoctorSpecialityUncheckedUpdateWithoutSpecialityInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type DoctorSpecialityUncheckedUpdateManyWithoutSpecialityInput = {
    id?: IntFieldUpdateOperationsInput | number
    doctorId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentMedicineCreateManyTreatmentInput = {
    id?: number
    medicineId: number
  }

  export type TreatmentMedicineUpdateWithoutTreatmentInput = {
    medicine?: MedicineUpdateOneRequiredWithoutTreatmentMedicineNestedInput
  }

  export type TreatmentMedicineUncheckedUpdateWithoutTreatmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentMedicineUncheckedUpdateManyWithoutTreatmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentMedicineCreateManyMedicineInput = {
    id?: number
    treatmentId: number
  }

  export type TreatmentMedicineUpdateWithoutMedicineInput = {
    treatment?: TreatmentUpdateOneRequiredWithoutTreatmentMedicineNestedInput
  }

  export type TreatmentMedicineUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    treatmentId?: IntFieldUpdateOperationsInput | number
  }

  export type TreatmentMedicineUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    treatmentId?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineCreateManyTerapeuticCategoryInput = {
    id?: number
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    pharmaceuticalFormid: number
  }

  export type MedicineUpdateWithoutTerapeuticCategoryInput = {
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    treatmentMedicine?: TreatmentMedicineUpdateManyWithoutMedicineNestedInput
    pharmaceuticalForm?: PharmaceuticalFormUpdateOneRequiredWithoutMedicinesNestedInput
  }

  export type MedicineUncheckedUpdateWithoutTerapeuticCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    pharmaceuticalFormid?: IntFieldUpdateOperationsInput | number
    treatmentMedicine?: TreatmentMedicineUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateManyWithoutTerapeuticCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    pharmaceuticalFormid?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineCreateManyPharmaceuticalFormInput = {
    id?: number
    code: string
    tradeName: string
    activeIngredient: string
    laboratory: string
    contraindications?: string | null
    concentration: number
    recommendedDosage: number
    teraputicCategoryid: number
  }

  export type MedicineUpdateWithoutPharmaceuticalFormInput = {
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    treatmentMedicine?: TreatmentMedicineUpdateManyWithoutMedicineNestedInput
    terapeuticCategory?: TerapeuticCategoryUpdateOneRequiredWithoutMedicinesNestedInput
  }

  export type MedicineUncheckedUpdateWithoutPharmaceuticalFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    teraputicCategoryid?: IntFieldUpdateOperationsInput | number
    treatmentMedicine?: TreatmentMedicineUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateManyWithoutPharmaceuticalFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    tradeName?: StringFieldUpdateOperationsInput | string
    activeIngredient?: StringFieldUpdateOperationsInput | string
    laboratory?: StringFieldUpdateOperationsInput | string
    contraindications?: NullableStringFieldUpdateOperationsInput | string | null
    concentration?: IntFieldUpdateOperationsInput | number
    recommendedDosage?: IntFieldUpdateOperationsInput | number
    teraputicCategoryid?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}