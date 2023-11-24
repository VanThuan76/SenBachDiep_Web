import Image, { ImageProps } from 'next/image';
interface Props extends ImageProps {
  layer?: boolean;
}

export function PreImage({ src, layer, ...rest }: Props) {
  return (
    <div className='relative h-full w-full overflow-hidden'>
      {src ? (
        <>
          <Image
            alt={rest.alt}
            src={src}
            layout='fill'
            objectFit={rest.objectFit || 'cover'}
            objectPosition={rest.objectPosition || 'left'}
            placeholder='empty'
            priority
          />
          {layer && (
            <div
              style={rest.style}
              className={`${rest.className} absolute left-0 top-0 h-full w-full bg-black opacity-50 blur-lg`}
            ></div>
          )}
        </>
      ) : (
        <div>
          <Image
            alt='default'
            src='/images/default.png'
            layout='fill'
            objectFit={rest.objectFit || 'cover'}
            objectPosition={rest.objectPosition || 'left'}
          />
        </div>
      )}
    </div>
  );
}
