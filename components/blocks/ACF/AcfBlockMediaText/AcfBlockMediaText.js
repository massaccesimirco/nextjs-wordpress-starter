import AcfMediaText from '@/components/organisms/AcfMediaText'
import PropTypes from 'prop-types'

/**
 * Handle the LzbMediaText block.
 *
 * @author WebDevStudios
 * @param {object} props            The props.
 * @param {object} props.attributes The attributes object.
 * @return {Element}                The component.
 */
export default function LzbBlockMediaText({attributes}) {
  // TODO: Query the DB for the image ID and replace the attributes.data with the correct information.
  attributes.data = {
    ...attributes.data,
    image: {}
  }

  return (
    <>
      {attributes ? (
        <AcfMediaText {...attributes.data} />
      ) : (
        'There was a problem with attributes in AcfBlockMediaText.js.'
      )}
    </>
  )
}

LzbBlockMediaText.propTypes = {
  attributes: PropTypes.object
}
